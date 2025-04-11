import React, { useState, useRef, useEffect } from 'react';
import Tree from 'react-d3-tree';
import { roadmaps } from './dummy';

const SimpleJavaRoadmap = ({ item }) => {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const [selectedNode, setSelectedNode] = useState(null);
    const [orientation, setOrientation] = useState('horizontal');
    const treeContainerRef = useRef(null);

    useEffect(() => {
        if (treeContainerRef.current) {
            const dimensions = treeContainerRef.current.getBoundingClientRect();
            setTranslate({
                x: orientation === 'horizontal' ? dimensions.width / 2 : dimensions.width / 2,
                y: orientation === 'horizontal' ? 80 : dimensions.height / 6,
            });
        }
    }, [orientation]);

    const getNodeColor = (node) => {
        const depth = node.__rd3t.depth;
        switch (depth) {
            case 0:
                return '#ffff00';
            case 1:
                return '#add8e6';
            case 2:
                return '#90ee90';
            case 3:
                return '#ffcccb';
            default:
                return '#f5deb3';
        }
    };


    const renderStyledNode = ({ nodeDatum, toggleNode }) => (
        <g
            onClick={(e) => {
                e.stopPropagation();
                setSelectedNode(nodeDatum);
            }}
        >
            <rect
                width={180}
                height={50}
                x={-90}
                y={-25}
                fill={getNodeColor(nodeDatum)}
                stroke="white"
                rx={6}
                ry={6}
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                    e.stopPropagation();
                    if (nodeDatum.children || nodeDatum._children) {
                        toggleNode();
                    }
                }}
            />
            <text
                fill="white"
                x={0}
                y={5}
                textAnchor="middle"
                fontSize={14}
                fontWeight={nodeDatum.__rd3t.depth === 0 ? 'normal' : 'normal'}
                dominantBaseline="middle"
            >
                {nodeDatum.name}
            </text>
        </g>
    );

    const searchMaps = (tree, item) => {
        return tree.find((node) => {
            if (node.name.toLowerCase().includes(item.toLowerCase())) return true;
            if (node.children) {
                const result = searchMaps(node.children, item);
                if (result) return true;
            }
            return false;
        });
    };

    const toggleOrientation = () => {
        setOrientation(prev => prev === 'horizontal' ? 'vertical' : 'horizontal');
    };

    const getNodeSizeAndSeparation = () => {
        if (orientation === 'horizontal') {
            return {
                nodeSize: { x: 220, y: 100 },
                separation: { siblings: 1.5, nonSiblings: 2.0 }
            };
        } else {
            return {
                nodeSize: { x: 120, y: 220 },
                separation: { siblings: 1.8, nonSiblings: 2.2 }
            };
        }
    };

    const { nodeSize, separation } = getNodeSizeAndSeparation();
    const treeData = searchMaps(roadmaps, item);

    return (
        <div className="min-h-screen bg-[#b3dceb99]  w-full">
            <div className="p-4 bg-[#4d5661]  border-b shadow-sm">
                <div className="flex justify-between items-center">
                    <div className=''> 
                        <h1 className="text-xl font-bold text-[#b29898]">Roadmap for {item}</h1>
                        <p className="text-sm text-white font-bold mr-2">Click on nodes to explore topics</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={toggleOrientation}
                            className="px-4 py-2 bg-[#1d232a] text-white rounded hover:bg-[#424444] flex items-center"
                        >
                            {orientation === 'horizontal' ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                    Switch to Vertical
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z" />
                                    </svg>
                                    Switch to Horizontal
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div
                    className="flex-grow h-[calc(100vh-72px)] overflow-hidden"
                    ref={treeContainerRef}
                >
                    <div className="w-full h-full overflow-auto">
                        <Tree
                            data={treeData}
                            translate={translate}
                            orientation={orientation}
                            nodeSize={nodeSize}
                            renderCustomNodeElement={renderStyledNode}
                            separation={separation}
                            pathFunc={orientation === 'vertical' ? 'step' : 'diagonal'}
                            transitionDuration={700}
                            pathStyleFunc={(linkDatum, orientation) => ({
                                stroke: 'white',
                                strokeWidth: 2,
                                strokeDasharray: '5,5'
                            })}

                        />
                    </div>
                </div>

                {selectedNode && (
                    <div className="w-64 bg-white border-l p-4 shadow-inner">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-gray-800">{selectedNode.name}</h3>
                            <button
                                onClick={() => setSelectedNode(null)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="text-sm text-gray-600">
                            {selectedNode.description || `This node represents the ${selectedNode.name} concept in Java.`}
                        </p>
                        {selectedNode.children && selectedNode.children.length > 0 && (
                            <div className="mt-4">
                                <p className="text-xs font-medium text-gray-500 mb-1">SUBTOPICS:</p>
                                <ul className="text-sm">
                                    {selectedNode.children.map((child, i) => (
                                        <li key={i} className="py-1 border-b border-gray-100">
                                            • {child.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SimpleJavaRoadmap;