import {
	ReactFlow,
	Background,
	Controls,
	addEdge,
	applyNodeChanges,
	applyEdgeChanges,
} from "@xyflow/react";
import { Container, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

import MainNode from "../../components/MainNode";
import SubNode from "../../components/SubNode";

const nodeTypes = { MainNode: MainNode, SubNode: SubNode };

import "@xyflow/react/dist/style.css";

// Flow Mind Map of "The Personal Developer Notebook" e-book.
// Each recap is a one-sentence summary reviewed directly from the book.
const MIND_MAP = [
	{
		id: "sdlc",
		label: "Software Development Lifecycle",
		color: "#6c8cff",
		recap: "Memandang SDLC bukan sebagai rangkaian tahapan teknis, melainkan siklus berpikir yang terus berulang: memahami, merancang, membangun, lalu belajar kembali dengan perspektif yang lebih tajam.",
		children: [
			{
				id: "sdlc-discovery",
				label: "Discovery Phase",
				recap: "Membangun software dimulai dari understanding, bukan teknologi—menggali masalah nyata, memvalidasi asumsi, dan membedakan permintaan user dari kebutuhan sebenarnya agar setiap output benar-benar menghasilkan outcome.",
			},
			{
				id: "sdlc-planning",
				label: "Planning & Design Phase",
				recap: "Architecture thinking bukan soal memakai pola atau teknologi paling modern, tetapi kemampuan mengelola kompleksitas dan mengantisipasi perubahan—berangkat dari data modeling sebagai cara sistem memahami realitas.",
			},
			{
				id: "sdlc-impl",
				label: "Implementation Phase",
				recap: "Menerjemahkan desain menjadi kode adalah proses interpretasi di grey area antara HLD dan LLD, yang menuntut strategi pengembangan, pengujian, kolaborasi, dan deployment yang sadar konteks.",
			},
			{
				id: "sdlc-reflection",
				label: "Refleksi Perjalanan SDLC",
				recap: "SDLC bukan proses linear menuju deployment, melainkan siklus iteratif yang bertujuan menghasilkan outcome nyata bagi user dan bisnis—bukan sekadar sistem yang selesai dibangun.",
			},
		],
	},
	{
		id: "human",
		label: "Human Side of Development",
		color: "#ff79c6",
		recap: "Sisi manusiawi dari menjadi developer: bagaimana mengelola diri sendiri, berkolaborasi dengan orang lain, dan memahami cara kerja pikiran di balik setiap baris kode.",
		children: [
			{
				id: "human-self",
				label: "Working with Yourself",
				recap: 'Sebelum membangun sistem untuk orang lain, developer perlu memahami "sistem internal" dirinya sendiri—produktivitas, cara belajar, kesehatan mental, dan pertumbuhan karier yang berkelanjutan.',
			},
			{
				id: "human-others",
				label: "Working with Others",
				recap: "Software development pada dasarnya adalah aktivitas sosial; kode hanyalah medium, dan nilai sesungguhnya lahir dari komunikasi, dokumentasi, budaya code review, dan kolaborasi tim.",
			},
			{
				id: "human-psych",
				label: "Psychology of Programming",
				recap: "Di balik setiap baris kode ada proses mental yang kompleks—kualitas software ditentukan oleh kualitas penalaran dan mental model di balik pikiran developer, bukan sekadar sintaks.",
			},
		],
	},
	{
		id: "ai",
		label: "Life Along AI",
		color: "#50e3c2",
		recap: "Refleksi tentang bagaimana AI mengubah cara developer bekerja dan berpikir, serta bagaimana tetap memegang kendali atas proses berpikir di tengah otomatisasi.",
		children: [
			{
				id: "ai-tool",
				label: "AI as a Tool, Not a Brain Replacement",
				recap: "AI sebaiknya dipakai untuk augmentasi, bukan automasi yang menggantikan proses berpikir—karena output bukan jaminan pemahaman, dan tanggung jawab tetap berada di tangan manusia.",
			},
			{
				id: "ai-losing",
				label: "Losing Control",
				recap: "Ketergantungan pada AI tumbuh perlahan di bawah tekanan deadline, hingga developer tanpa sadar berhenti memvalidasi dan kehilangan kendali atas proses berpikirnya sendiri.",
			},
			{
				id: "ai-thinking",
				label: "More Thinking Than Coding",
				recap: "Ketika coding menjadi murah dan cepat, nilai berpindah ke kemampuan bernalar—problem framing menjadi skill inti yang menentukan apakah output yang melimpah benar-benar mengarah ke tempat yang tepat.",
			},
			{
				id: "ai-control",
				label: "Stay in Control",
				recap: "Yang membedakan developer dari AI bukan kemampuan menghasilkan output, melainkan kemampuan mengumpulkan konteks nyata dan menalar di atasnya—di situlah kita merebut kembali kendali dan relevansi.",
			},
		],
	},
];

function getSubStyle(color, selected, isMain) {
	return {
		width: isMain ? 230 : 210,
		background: isMain ? color : "#2a2540",
		color: isMain ? "#1a1626" : "#faf9ff",
		fontWeight: isMain ? 700 : 500,
		fontSize: isMain ? "14px" : "12px",
		border: selected ? "2px solid #ffffff" : `1px solid ${color}`,
		borderRadius: "10px",
		padding: isMain ? "12px 14px" : "8px 10px",
		boxShadow: selected
			? `0 0 16px ${color}, 0 4px 8px rgba(0, 0, 0, 0.25)`
			: "0 4px 8px rgba(0, 0, 0, 0.25)",
		cursor: "pointer",
	};
}

export default function OnBoarding() {
	const isMobile = useBreakpointValue({ base: true, xl: false });

	const [nodes, setNodes] = useState([]);
	const [_selectedNodeId, setSelectedNodeId] = useState(null);
	const [edges, setEdges] = useState([]);
	const [, setMainNodeTrigger] = useState(0); // re-trigger the detail card reveal

	// On mobile the canvas is covered by an overlay until the user taps it,
	// so swiping over the section scrolls the page instead of panning the map.
	const [interactive, setInteractive] = useState(false);
	const showOverlay = isMobile && !interactive;
	const canInteract = !isMobile || interactive; // desktop is always interactive

	const onNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[],
	);

	const onEdgesChange = useCallback(
		(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[],
	);

	const onConnect = useCallback((connection) => {
		setEdges((eds) =>
			addEdge(
				{
					...connection,
					style: { stroke: "#FF0072", strokeWidth: 2 },
				},
				eds,
			),
		);
	}, []);

	const onNodeClick = useCallback((_event, node) => {
		if (node.type !== "SubNode") return;

		setSelectedNodeId(node.id);
		setMainNodeTrigger((prevTrigger) => {
			const nextTrigger = prevTrigger + 1;

			setNodes((nds) =>
				nds.map((n) => {
					if (n.id === "detail") {
						return {
							...n,
							data: {
								...n.data,
								label: node.data.label,
								description: node.data.description,
								color: node.data.color,
								url: undefined,
								trigger: nextTrigger,
							},
						};
					}
					if (n.type === "SubNode") {
						return {
							...n,
							style: getSubStyle(
								n.data.color,
								n.id === node.id,
								n.data.isMain,
							),
						};
					}
					return n;
				}),
			);

			return nextTrigger;
		});
	}, []);

	useEffect(() => {
		const subSpacing = 74;
		const groupGap = 54;
		const detailX = 820;

		// Slight per-branch stagger so the three limbs splay out like a tree
		// instead of forming a rigid grid.
		const branchXByIndex = [360, 430, 360];

		const generatedNodes = [];
		const generatedEdges = [];
		const branchCenters = [];
		let cursorY = 0;

		MIND_MAP.forEach((branch, bi) => {
			const branchX = branchXByIndex[bi] ?? 380;
			const childYs = branch.children.map(
				(_, i) => cursorY + i * subSpacing,
			);
			const branchY =
				childYs.reduce((sum, y) => sum + y, 0) / childYs.length;
			branchCenters.push(branchY);

			generatedNodes.push({
				id: branch.id,
				type: "SubNode",
				data: {
					label: branch.label,
					description: branch.recap,
					color: branch.color,
					isMain: true,
				},
				position: { x: branchX, y: branchY },
				style: getSubStyle(branch.color, false, true),
			});

			generatedEdges.push({
				id: `e-${branch.id}-detail`,
				source: branch.id,
				target: "detail",
				type: "default",
				animated: true,
				style: { stroke: branch.color, strokeWidth: 2.2 },
			});

			branch.children.forEach((child, i) => {
				// Zig-zag the leaves horizontally so each limb looks organic.
				const leafX = (i % 2) * 78;

				generatedNodes.push({
					id: child.id,
					type: "SubNode",
					data: {
						label: child.label,
						description: child.recap,
						color: branch.color,
						isMain: false,
					},
					position: { x: leafX, y: childYs[i] },
					style: getSubStyle(branch.color, false, false),
				});

				generatedEdges.push({
					id: `e-${child.id}`,
					source: child.id,
					target: branch.id,
					type: "default",
					style: {
						stroke: branch.color,
						strokeWidth: 1.5,
						opacity: 0.85,
					},
				});
			});

			cursorY = childYs[childYs.length - 1] + subSpacing + groupGap;
		});

		const detailY =
			(branchCenters[0] + branchCenters[branchCenters.length - 1]) / 2 -
			70;

		generatedNodes.push({
			id: "detail",
			type: "MainNode",
			data: {
				label: "Personal Developer Notebook",
				description:
					"Di era AI, kemampuan teknis saja tak lagi cukup. E-book ini membekalimu dengan pola pikir dan konsep fundamental yang tetap relevan apa pun teknologinya—karena yang bernilai adalah kemampuan berpikir, memahami masalah, dan menciptakan solusi.",
				color: "#cc7bc9",
				trigger: 0,
			},
			position: { x: detailX, y: detailY },
		});

		setNodes(generatedNodes);
		setEdges(generatedEdges);
	}, []);

	return (
		<Container maxW="7xl" color="#faf9ff" pt={20}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6 }}
			>
				<Flex direction={"column"} justify="space-between" mb={8}>
					<Box>
						<Text
							fontFamily="'Playfair Display', serif"
							fontWeight="800"
							fontStyle="italic"
							fontSize={{ base: "4xl", md: "5xl" }}
							color="#faf9ff"
							lineHeight="1.2"
						>
							Personal Developer
						</Text>

						<Box
							display="inline-block"
							position="relative"
							fontFamily="'Playfair Display', serif"
							fontWeight="800"
							fontStyle="italic"
							fontSize={{ base: "4xl", md: "5xl" }}
							color="#faf9ff"
							mt={1}
							mb={5}
						>
							Notebook
							<svg
								style={{
									position: "absolute",
									bottom: "-10px",
									left: "0",
									width: "100%",
									height: "14px",
									pointerEvents: "none",
								}}
								viewBox="0 0 200 14"
								preserveAspectRatio="none"
							>
								<path
									d="M 4,7 C 50,1 150,1 196,7"
									fill="none"
									stroke="#cc7bc9"
									strokeWidth="3.5"
									strokeLinecap="round"
								/>
							</svg>
						</Box>

						<Text
							fontFamily="'Outfit', sans-serif"
							color="#c0c0c0"
							fontSize={{ base: "md", md: "lg" }}
							lineHeight="1.8"
							maxW="3xl"
						>
							Di era AI, kemampuan teknis saja tak lagi cukup.
							E-book ini membekalimu dengan pola pikir dan konsep
							fundamental yang tetap relevan apa pun
							teknologinya—karena yang bernilai adalah kemampuan
							berpikir, memahami masalah, dan menciptakan solusi.
						</Text>
					</Box>

					<Box
						borderWidth={2}
						borderColor={"#c0c0c0"}
						boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
						borderRadius="2xl"
						w="100%"
						h={{ base: "50vh" }}
						minH="560px"
						marginTop={10}
						overflow="hidden"
						bg="#1f1b2e"
					>
						<div
							style={{
								width: "100%",
								height: "100%",
								position: "relative",
							}}
						>
							<ReactFlow
								nodes={nodes}
								edges={edges}
								onNodesChange={onNodesChange}
								onEdgesChange={onEdgesChange}
								onConnect={onConnect}
								onNodeClick={onNodeClick}
								deleteKeyCode={null}
								fitView
								zoomOnScroll={false}
								zoomOnPinch={canInteract}
								panOnDrag={canInteract}
								minZoom={0.4}
								maxZoom={1.75}
								nodesDraggable={false}
								nodesConnectable={false}
								nodeTypes={nodeTypes}
							>
								<Background
									variant="lines"
									color="#c0c0c0"
									style={{ opacity: 0.2 }}
								/>
								<Controls showInteractive={false} />
							</ReactFlow>

							{showOverlay && (
								<Flex
									position="absolute"
									inset={0}
									zIndex={5}
									direction="column"
									align="center"
									justify="center"
									gap={2}
									bg="rgba(31, 27, 46, 0.55)"
									backdropFilter="blur(1px)"
									cursor="pointer"
									onClick={() => setInteractive(true)}
								>
									<Box
										px={5}
										py={3}
										borderRadius="full"
										bg="#866bab"
										color="#faf9ff"
										fontFamily="'Outfit', sans-serif"
										fontWeight="600"
										boxShadow="0 4px 14px rgba(0,0,0,0.35)"
									>
										Ketuk untuk berinteraksi
									</Box>
									<Text
										fontFamily="'Outfit', sans-serif"
										fontSize="xs"
										color="#d0d0d0"
									>
										Geser halaman seperti biasa di luar area
										ini
									</Text>
								</Flex>
							)}
						</div>
					</Box>
				</Flex>
			</motion.div>
		</Container>
	);
}
