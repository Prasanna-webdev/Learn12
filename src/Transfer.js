import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import { ethers } from 'ethers';

import fuji from './images/Fuji.png';
import bsc from './images/BSC.png';
import polygon from './images/polygon.png';
import avalanche from './images/avalanche.png';
import binance from './images/Binance.png';
import Router from './images/Router.jpg';
import {ConnectButton,Icon,TabList,Tab,useNotification} from 'web3uikit'

import './Transfer.css'

const Transfer = () => {
 
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const ipfsHash = queryParams.get('ipfsHash');
    const [chain,setChain]=useState('_ _')
    const [transaction,setTransaction] = useState('')

    const dispatch2 = useNotification();
    const handleNewNotification2 = (
       
        ) => {
            dispatch2({
                type:"success",
                message: 'Succesfully Transferred to '+chain,
                title: 'Transfer Succesfull !',
                icon:"chevronRightX2",
                position:  'topR',
                
            });
        };

    const chainImages = {
        'fuji': avalanche,
        'bsc': binance,
      };

    const chainData={
        'fuji':{
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
        },
        'bsc':{
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
        }
    }
    const cardStyles = {
      
        // width:'15em',
        // backgroundIimage: 'linear-gradient(to bottom right, yellow, orange)',
        // color: 'black', // Set text color to white for better visibility on the gradient background
        // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
        width:'15em',
       
  border: '0.65px solid rgba(255, 255, 255, 0.12)',
  background: 'rgba(255, 255, 255, 0.17)',
  color:'white',
  padding:'15px'
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

  // You can now access the ipfsHash parameter in your component
  return (
    <div style={{color:"white"}}>
      
      <center>
        <div class="main">
            <div>
      <h5>Certificate on &nbsp;<img style={{width:'60px'}} src={polygon} ></img></h5>
      <img style={{width:'20em'}} src="https://bafybeieku42kavuj2557qes376ieauwodiif7tbpjiua2na374waplh65y.ipfs.sphn.link/1.png" ></img>
      <br></br>
      <br></br>
      {!transaction &&  <h5 style={{color:'green'}}>Your NFT is on Polygon Mumbai</h5>}
      {transaction &&  <h5 style={{color:'red'}}>Your NFT is no longer on Polygon Mumbai</h5>}
      </div>
<div style={cardStyles}>
      
<h5>Select Destination Chain</h5>

      <img src={polygon}></img> to &nbsp;&nbsp; {chain=='_ _'?chain:<img style={{width:'70px'}} src={chainImages[chain]}></img>}

     
      <br></br>

      <img style={{width:"10em"}} src={fuji} onClick={async()=>{
        setChain('fuji')
        

      }} />
<br></br>
<br></br>
<img style={{width:"10em"}} src={bsc} onClick={async()=>{
    setChain('bsc')
        

      }} />
      <br></br>
      <br></br>

      <button style={{backgroundColor:"rgba(46,48,69)",borderRadius:"50px",color:"white"}} onClick={async ()=>{

const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
const provider = new ethers.providers.Web3Provider(window.ethereum)


const signer = provider.getSigner();
await window.ethereum.request(chainData[chain])



const contractAddress = "0x05d709E1093b57E9d58C20F88b1A17Fae191ACc4";
const contract = new ethers.Contract(
contractAddress,
abi,
signer
)
const id=await contract.id();
contract.transferCrossChain("fuji",[id-1,"https://bafybeidx3yxwfnw3i364kthy3ai56zhzofj5kedwf6tpktsnukpm5honge.ipfs.sphn.link/qq.json"])
.then((transaction) => {


console.log('transaction is'+transaction)
setTransaction(transaction.hash)
localStorage.setItem(`s3completed`,'true')
handleNewNotification2()
})

.catch((err) => {
alert(err)



});

      }} ><img style={{borderRadius:"50px",width:'40px'}} src={Router}></img>&nbsp;Transfer &nbsp;</button>
      </div>

      
      <div>
      <h5>Certificate on &nbsp;{chain=='_ _'?chain:<img style={{width:'50px'}} src={chainImages[chain]} ></img>}</h5>
      <img style={{width:'20em'}} src="https://bafybeieku42kavuj2557qes376ieauwodiif7tbpjiua2na374waplh65y.ipfs.sphn.link/1.png" ></img>
    <br></br>
    <br></br>
    {transaction &&  <h5 style={{color:'green'}}>Succesfully Transferred to {chain}</h5>}
   
      </div>
      
 </div>
 <br></br>

      </center>
     
      {/* Use the parameter value in your component */}
    </div>
  );
};

export default Transfer;
