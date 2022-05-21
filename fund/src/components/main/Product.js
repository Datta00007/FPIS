import React, { useState } from 'react'
import uuid from 'react-uuid';
import './product.css'
import axios from 'axios';
import { useEffect } from 'react';
//./node_modules/.bin/truffle
//    const accounts = await web3.eth.getAccounts();
//   const newAccount = await web3.eth.personal.newAccount('test');
//   console.log("newAccount", newAccount);
//   await web3.eth.personal.unlockAccount(newAccount, 'test', 10000);
//   await web3.eth.getBalance(accounts[0], (err, bal) => { console.log("Ganache balance", bal); } );
//   await web3.eth.sendTransaction({to:newAccount, from:accounts[0], value:web3.utils.toWei("5", "ether")});
//   await web3.eth.getBalance(newAccount, (err, bal) => { console.log("New Account balance", bal); } );

import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider'
import { loadContract } from "../utils/load-contract";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { useHistory } from 'react-router-dom';
function Product(props) {
    // const history = useHistory()
    const [isPaid, setIsPaid] = useState(false);
    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,
        contract: null
    })
    const [balance, setBalance] = useState(null);
    const [account, setAccount] = useState(null);
    // const [sender, setSender] = useState(null);

    if (balance !== null && balance !== 0);
    useEffect(() => {

        const loadProvider = async () => {
            // let provider = null;

            const provider = await detectEthereumProvider()
            const contract = await loadContract("Funder", provider)
            if (provider) {
                provider.request({ method: "eth_requestAccounts" });
                // console.log(provider)
                setWeb3Api({
                    web3: new Web3(provider),
                    provider,
                    contract
                });
            } else {

                // if the provider is not detected, detectEthereumProvider resolves to null
                console.error('Please install MetaMask!')
            }
        };
        loadProvider();

    }, [])


    useEffect(() => {
        const getAccount = async () => {
            const accounts = await web3Api.web3.eth.getAccounts();
            setAccount(accounts[0]);
            // const account2 = (await Web3.eth.getAccounts())[3]
            // setSender(accounts[0]);
            // console.log(account2);
        }
        web3Api.web3 && getAccount()
    }, [web3Api.web3])

    useEffect(() => {
        const loadBalance = async () => {
            const { contract, web3 } = web3Api;
            const balance = await web3.eth.getBalance(contract.address);

            setBalance(web3.utils.fromWei(balance, "ether"));
            // toast(balance);
        }
        web3Api.contract && loadBalance();
    }, [web3Api])
    //console.log(account);
    const setpid = (prid) => {
        const { contract, web3 } = web3Api;

        const NameContract = new web3.eth.Contract(contract.abi, contract.address);
        NameContract.methods.setPid(prid).send();
        console.log("inside of setpid");
        // toast(NameContract.methods.getPid().call(),{position:toast.POSITION.TOP_LEFT});
        // console.log(NameContract.methods.getPid().call())

    }
    const transferFund = async (prid) => {
        // toast(prid);
        const { contract, web3 } = web3Api;
        // setpid(prid);
        // let tx_hash = await contract.functions.transfer(prid).transact();
        // let tx_receipt = await web3.eth.waitForTransactionReceipt(tx_hash);
        // toast(tx_receipt);
        // await contract.setPid(prid).send();
        // value: web3.utils.toWei("0.000008", "ether"),
        // await contract.setPid(prid);
        await contract.transfer(prid,{
            from: account,
            //to: account,
            // data:"from the 2nd account",
            value: web3.utils.toWei("2", "ether"),
        })
        .then(res => {
            if (res) {
                setIsPaid(true);
                toast.success("transaction completed successfully!");
                axios.post("http://localhost:9002/addproduct", user)
                    .then(res => {
                        //console.log(res.data.user);

                        toast.success(res.data.message, {theme: "dark"})
                        // withdrawFund();
                        setTimeout(() => {
                            window.location.reload(false);
                        }, 7000);

                        // window.location.reload(false);


                    })
            }
        })
        .catch(err => {
            console.log(err);

            toast.error(err.message ? err.message : "Something went wrong ! Please try after sometime");
            toast.error("Sorry, can't add your product");
            setTimeout(() => {
                window.location.reload(false);
            }, 5000);

        })
        // await web3.eth.sendTransaction({
        //     from: account,
        //     to: "0xbaBA78c2072fafe284391Aa18e21e9180861824A",
        //     value: web3.utils.toWei("0.000008", "ether"),

        // })
        // const withdrawAmount = web3.utils.toWei("1", "ether");
        // //const accounts = await web3Api.web3.eth.getAccounts();

        // await contract.withdraw(withdrawAmount, {
        //     from: account,

        // })
            


        // await contract.methods.set(prid).send({ from: account });

        // await contract.transfer({
        //     from: account,
        //     //to: account,
        //     // data:"from the 2nd account",
        //     value: web3.utils.toWei("0", "ether"),
        // })
        // toast(balance);
        // await contract.deployed().then(function (contractInstance) {
        //     contractInstance.function({ from: web3.eth.accounts[0] }).then(function (result) {
        //         alert('transaction success')
        //     }).catch(function (e) {
        //         console.log('error')
        //     });
        // }  ) 
    }
    // const withdrawFund = async () => {
    //     const { web3, contract } = web3Api;
    //     const withdrawAmount = web3.utils.toWei("0.000009", "ether");
    //     //const accounts = await web3Api.web3.eth.getAccounts();

    //     await contract.withdraw(withdrawAmount, {
    //         from: account,

    //     })
    //     window.location.reload(false);
    // }
    const [user, setUser] = useState({
        pid: "",
        name: "",
        username: sessionStorage.getItem("username"),
        company: sessionStorage.getItem("name"),
        category: "",
        color: "",
        address: sessionStorage.getItem("address"),
        mfg: "",
        expiry: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const addproduct = async () => {
        // if (user.expiry === "") {
        //     setUser.expiry("NA")
        // }

        const { name, category, color, mfg, expiry } = user;
        if (!name || !category || !color || !mfg || !expiry) {
            toast.warn("all fields are required", { theme: "dark", position: toast.POSITION.TOP_LEFT });
            return;
        }
        user.pid = uuid();
        transferFund(user.pid);
        // console.log(uuid());
        // if (isPaid) {
        //     axios.post("http://localhost:9002/addproduct", user)
        //         .then(res => {
        //             //console.log(res.data.user);

        //             //toast.success(res.data.message, {theme: "dark"})
        //             setTimeout(() => {
        //                 toast.success(res.data.message, { theme: "dark" })
        //             }, 20000);

        //             // window.location.reload(false);


        //         })
        // }
        // else {
        //     toast.error("can not add product", { theme: "dark", position: toast.POSITION.TOP_LEFT });
        // }

        // setTimeout(() => {
        //     window.location.reload(false);
        // }, 20000);
    }


    return (props.trigger) ? (
        <center>
            <div className='popup-product'>
                <div className="popup-cross">
                    <span className='close-btn' onClick={() => props.setTrigger(false)}> ❌ </span>
                    {props.children}
                </div>
                <div className='product-form'>
                    <center >

                        <h1 style={{ color: "white", padding: "3rem" }}>Product Details</h1>

                        <div className=" product-content__input">

                            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Product Name" autoComplete='off' />
                            <br />
                            <br />

                            {/* <input type="text" style={{ color: "white"}}name="username" value={user.username} onChange={handleChange} placeholder={user.username} disabled="true" />
                        <br />
                        <br />
                        
                        <input type="text" name="company" value={user.company} onChange={handleChange} placeholder={user.company} style={{ color: "white"}} disabled="true"/>
                        <br />
                        <br /> */}

                            <input type="text" name="category" value={user.category} onChange={handleChange} placeholder="Category" autoComplete='off' required />
                            <br />
                            <br />

                            <input type="text" name="color" value={user.color} onChange={handleChange} placeholder="Color" autoComplete='off' required />
                            <br />
                            <br />

                            {/* <input type="text"  name="address" value={user.uaddress} onChange={handleChange} placeholder={user.address} style={{ color: "white"}} disabled="true"/>
                        <br />
                        <br /> */}

                            <input type="text" name="mfg" value={user.mfg} onChange={handleChange} placeholder="MFG date" onFocus={
                                (e) => {
                                    e.currentTarget.type = "date";
                                    e.currentTarget.focus();
                                }
                            } autoComplete='off' required />
                            <br />
                            <br />

                            <input type="text" id="expiry" name="expiry" value={user.expiry} onChange={handleChange} placeholder="Best before/ Warrenty" onFocus={
                                (e) => {
                                    e.currentTarget.type = "date";
                                    // e.currentTarget.value(user.expiry);
                                    // e.currentTarget.focus();

                                }
                            } autoComplete='off' required />
                            <br />
                            <br />

                            <button type="button" onClick={addproduct}>Add</button>

                        </div>
                    </center>
                </div>

            </div>
            <br />
            <br />
            <br />
        </center>

    ) : "";
}

export default Product