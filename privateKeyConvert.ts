import * as web3 from "@solana/web3.js";

const privateKeyString = "3osoMQ9UhYE8KYSvNwFDw4d2rSHqKyn49T5WfiuvmPEa7S5V8mqBHuwRqG9aq4X2xPgqANhKYeGwd9ei2WMPQJF8"

const SECRET_KEY = new Uint8Array([
        129,
        196,
        96,
        189,
        197,
        162,
        31,
        7,
        157,
        46,
        22,
        99,
        34,
        42,
        188,
        201,
        153,
        172,
        25,
        103,
        160,
        198,
        85,
        246,
        183,
        3,
        225,
        3,
        14,
        191,
        147,
        95,
        137,
        107,
        37,
        20,
        221,
        197,
        217,
        105,
        163,
        238,
        165,
        14,
        128,
        93,
        55,
        131,
        57,
        158,
        174,
        216,
        43,
        147,
        37,
        252,
        105,
        47,
        125,
        144,
        15,
        255,
        155,
        3
    ])

    const keypair = web3.Keypair.fromSecretKey(SECRET_KEY, {skipValidation: true})
    const publicKey = new web3.PublicKey(keypair.publicKey)


    console.log(publicKey.toBase58())

