var Web3=require('web3');
var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8445"));
}
var _abiArray=[{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"}],"name":"forwardTo","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"add","type":"address"}],"name":"set2ndAdd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"incrementAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var _bin="608060405234801561001057600080fd5b503073ffffffffffffffffffffffffffffffffffffffff16316000819055506103608061003e6000396000f3fe60806040526004361061007d576000357c01000000000000000000000000000000000000000000000000000000009004806312065fe01461008257806327d8ad88146100b45780632e1a7d4d146100f85780633aedd27414610126578063853828b614610177578063a4a049dd1461018e578063b6b55f25146101b9575b600080fd5b34801561008e57600080fd5b506100976101e7565b604051808381526020018281526020019250505060405180910390f35b6100f6600480360360208110156100ca57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061020d565b005b6101246004803603602081101561010e57600080fd5b8101908080359060200190929190505050610291565b005b34801561013257600080fd5b506101756004803603602081101561014957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102aa565b005b34801561018357600080fd5b5061018c6102ee565b005b34801561019a57600080fd5b506101a361030a565b6040518082815260200191505060405180910390f35b6101e5600480360360208110156101cf57600080fd5b8101908080359060200190929190505050610314565b005b6000803073ffffffffffffffffffffffffffffffffffffffff1631600054915091509091565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163160038190555050565b8060008082825403925050819055508060018190555050565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000546001819055506000546000808282540392505081905550565b6000600154905090565b803414151561032257600080fd5b8060008082825401925050819055505056fea165627a7a723058204d0c112586f711ca5e504d57d5fb65b25ad15b60668e449f31c9b1fd314485790029";
var _contract = new web3.eth.Contract(_abiArray);
//unlock the account with a password provided
//web3.personal.unlockAccount(web3.eth.accounts[0],'password');
_contract
    .deploy({data:"0x"+_bin})
    .send({from: "0x52cadd19f40f5f5f544f33fde2f8fc118862e4f9", gas: 364124, gasPrice: '100000'})
    .then(function(newContractInstance){
        console.log(newContractInstance.options.address) // instance with the new contract address
    });
