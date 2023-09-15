import React,{useState} from 'react'
import CourseCard from './CourseCard';
import Card2 from '../images/card1.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { Routes, Route,Link } from "react-router-dom";
import {ConnectButton,Icon,TabList,Tab,useNotification} from 'web3uikit'
import { ethers } from 'ethers';
import './Testing.css'
function Testing() {
    const ipfsHash = 'https://bafybeidg6yld53hxxa3u2brofw6gshfiwz4zlbxqzgn4koywys4uyzagau.ipfs.sphn.link/Polygon-removebg-preview.png';
    const [link,setLink]=useState('LeWIC4XBcKY')
    const [courseId,setCourseId]=useState(2)
    const [moduleId,setModuleId]=useState(0)
    const [notes,setNotes]=useState(0)
    const [show1, setShow1] = useState(false);
   

    const handleClose = () => setShow1(false);
    
    const videoLink=JSON.parse(localStorage.getItem('courseinfo')).basicsofblockchain
    // const repeatCount = localStorage.getItem('user') ?parseInt(JSON.parse(localStorage.getItem("user"))[courseId].numberOfModules) :videoLink.length;
    const repeatCount = videoLink.length

    const [showNFT, setShowNFT] = useState(false);
  

    const dispatch0 = useNotification();

    const handleNewNotification0 = (
       
    ) => {
        dispatch({
            type:"error",
            message: 'Please Sign in to continue',
            title: 'User Not Authenticated',
            icon:"chevronRightX2",
            position:  'bottomR',
        });
    };
    const dispatch = useNotification();

    const handleNewNotification = (
       
    ) => {
        dispatch({
            type:"error",
            message: 'Please connect your crypto wallet',
            title: 'User Not Authenticated',
            icon:"chevronRightX2",
            position:  'bottomR',
        });
    };

    const dispatch1 = useNotification();

    const handleNewNotification1 = (
       
    ) => {
        dispatch1({
            type:"warning",
            message: 'Please complete the course to claim your NFT Certificate',
            title: 'Course not completed',
            icon:"chevronRightX2",
            position:  'bottomR',
            
        });
    };
    const dispatch2 = useNotification();
    const handleNewNotification2 = (
       
        ) => {
            dispatch2({
                type:"success",
                message: 'You have claimed your NFT Certificate ! You can view it on OpenSea.',
                title: 'Congratulations',
                icon:"chevronRightX2",
                position:  'bottomR',
                
            });
        };
    
    
    let abi=[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "chainName",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "requestIdentifier",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "execFlag",
                    "type": "bool"
                },
                {
                    "internalType": "bytes",
                    "name": "execData",
                    "type": "bytes"
                }
            ],
            "name": "iAck",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "requestSender",
                    "type": "string"
                },
                {
                    "internalType": "bytes",
                    "name": "packet",
                    "type": "bytes"
                },
                {
                    "internalType": "string",
                    "name": "srcChainId",
                    "type": "string"
                }
            ],
            "name": "iReceive",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "uri",
                    "type": "string"
                }
            ],
            "name": "safeMint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "chainId",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "contractAddress",
                    "type": "string"
                }
            ],
            "name": "setContractOnChain",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "feePayerAddress",
                    "type": "string"
                }
            ],
            "name": "setDappMetadata",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "gateway",
                    "type": "address"
                }
            ],
            "name": "setGateway",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "chainName",
                    "type": "string"
                },
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "nftId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "uri",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct XERC721.TransferTemp",
                    "name": "transferTemp",
                    "type": "tuple"
                }
            ],
            "name": "transferCrossChain",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "ChainName",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "currentId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "gateway",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "gatewayContract",
            "outputs": [
                {
                    "internalType": "contract IGateway",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint64",
                    "name": "destGasLimit",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "destGasPrice",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "ackGasLimit",
                    "type": "uint64"
                },
                {
                    "internalType": "uint64",
                    "name": "ackGasPrice",
                    "type": "uint64"
                },
                {
                    "internalType": "uint128",
                    "name": "relayerFees",
                    "type": "uint128"
                },
                {
                    "internalType": "uint8",
                    "name": "ackType",
                    "type": "uint8"
                },
                {
                    "internalType": "bool",
                    "name": "isReadCall",
                    "type": "bool"
                },
                {
                    "internalType": "string",
                    "name": "asmAddress",
                    "type": "string"
                }
            ],
            "name": "getRequestMetadata",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "id",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "ourContractOnChains",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "a",
                    "type": "address"
                }
            ],
            "name": "toBytes",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "b",
                    "type": "bytes"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "uri",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
  return (
    <div style={{color:'white'}}> 
    
        <div >
        
        {localStorage.getItem('name')? <div class="container">
        <div class="right">
        <strong>
      Module &nbsp;{moduleId+1}
      </strong>
    <CourseCard link={link} notes={notes} courseId={courseId} moduleId={moduleId} courseName="basicsofblockchain" />
     
      
    </div>
    <br></br>
    <div class="left">
        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
        <strong>
            <img style={{width:'5em'}} src={Card2}></img>
            <br></br>
            <br></br>
     Basics of Blockchain
     </strong>
     <hr></hr>

    {Array.from({ length: 3 }, (_, i) => (
        <div key={i}>
          <div className="fruits-divst" onClick={async() => {
            setCourseId(courseId);
            setModuleId(i);

           
                setLink(videoLink[i])
             
             
            setNotes('notes');
          }}>
            
            <l style={{ color: 'orange' }} className={JSON.parse(localStorage.getItem("user")) && JSON.parse(localStorage.getItem("user"))[courseId].isModuleComplete[`${i}`]==true ||localStorage.getItem(`C${courseId}M${i}`)=='true' || JSON.parse(localStorage.getItem("userinfo")).basicsofblockchain.length>i && JSON.parse(localStorage.getItem("userinfo")).basicsofblockchain.includes(`s${i}`) ? 'fas fa-check-circle checked-icon' : 'far fa-circle unchecked-icon'}></l>
            <strong>
              &nbsp;
              Module &nbsp; {i+1}
              <br></br>
              <l style={{ color: 'orange', fontSize: '17px' }}>{i+1}/16</l> <l style={{ color: 'grey', fontSize: '15px' }}>Video </l>
            </strong>
          </div>
          <hr></hr>
        </div>
      ))}

      <hr></hr>
      <button type="button" class={localStorage.getItem(`s3completed`) && localStorage.getItem(`s3completed`)=='true' ?`btn btn-success`: `btn btn-danger`}     onClick={async()=>{
        

        if(typeof window.ethereum == 'undefined') {
           handleNewNotification()
        }


        
        if(localStorage.getItem(`s3completed`) && localStorage.getItem(`s3completed`)=='true')
        {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
              });
            window.open(`/transfer?ipfsHash=${ipfsHash}`, '_blank');
        }
        else
        {
            let flag=0;
            for (let index = 0; index < 3; index++) {
                
               if(!(JSON.parse(localStorage.getItem('userinfo')).basicsofblockchain.includes(`s${index}`)))
               {
                flag=flag+1;
                
               }
            }
            if(flag==0)
            {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                  });
                const provider = new ethers.providers.Web3Provider(window.ethereum)
             
            
                const signer = provider.getSigner();
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: "0x13881",
                    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
                    chainName: "Mumbai",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                }]
            })
           
            
            
            const contractAddress = "0x05d709E1093b57E9d58C20F88b1A17Fae191ACc4";
            const contract = new ethers.Contract(
                contractAddress,
                abi,
                signer
            )
          
            contract.safeMint("https://bafybeidx3yxwfnw3i364kthy3ai56zhzofj5kedwf6tpktsnukpm5honge.ipfs.sphn.link/qq.json")
            .then((transaction) => {
            
            handleNewNotification2()
            console.log('transaction is'+transaction)
            alert(transaction)
            localStorage.setItem(`s3completed`,'true')
            window.location.reload(true)
            })
      
            .catch((err) => {
           alert(err)
            handleNewNotification1()
           
            
            });
            
            }

            else{
                handleNewNotification1()
            }
            }
        
        
        }}
        >{localStorage.getItem(`s3completed`) && localStorage.getItem(`s3completed`)=='true'?'View Your Certificate':'Claim Your NFT Certificate'}</button>



    </div>
  
  </div>
  :handleNewNotification0()}

<Modal
        show={show1}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Wallet not connected</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Make sure that you have wallet installed on your browser
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
   
      <Link to={`/transfer?ipfsHash=${ipfsHash}`}>Transfer</Link>
   
  
  </div>
  </div>
  
  )
}

export default Testing