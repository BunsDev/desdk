import { expect } from "chai";
import { ethers } from "hardhat";
import { DeBridgeApiSignatureStorage, SignersSignatureStorage } from "../src/evm"

const DEBRIDGE_API_TEST_CASE =
    {
        submissionId: '0x55bc1f722caf83bbd1c448d58cc103277e20cc4ea2915899e46eb75d1c320ff1',
        signatures: [
            "0xab3b790af5edcae0d21440b64ed6dcbc328dc1cf72c20863d45a56f6bf9a2c612f41918e0a784493a0f257113215028f7d3168301ca5601f51a51a05a08e52851c",
            "0xcdcea9dc6443782e9dfb312a124ab59ac64e24bb4745facbe47dd02146f657ab47a9c3458097b0eecec86bdedf46e4417c3e7a813883a8860c2baa2b49184eef1c",
            "0xe4494a33df84edf209c7be5e7084eadaad08924f5612079b84b3964ec6069e0c7517de7828cfcf5f3dbd1f88dd2cfd45ee06b752bfc4f15cc5d78803f8fea4821b",
            "0x12e4aa4116e6a51c770f571239ac83103afadc691052108158f4dca312dcc4df40b849c88f460d3aebbf8d5942c769e52f2f64835d6efc2225aeccee7aa88f381b",
            "0xc12f44085153b9afbea5e26986635bfeafb2e57dd803758c6c69150eaef22e65243d3e346b96e6f36645418becafc6d383531aa8c8018c020a66e5d6e7ee2c6a1b",
            "0x96d2fea944842c29c446e5467b1880584f974a3decb138f877fd757d05dd2ac1009fa08fa4d69ec882604534f952ff57a6e779a9c24ba762019c0aadfb7e4f101c",
            "0x4d6f4bb70678f3ea16cc6c22662cc57b2e4790616f5fdceca9b0b3230446349c0693ddda6181443e6dcc85f46c025a94156552904ddfb92213b86e6de8b4dd431b",
            "0xb177ce4d52672ec625bd4e1aab36251718a469f94469f745cdc61f7cc157a20573b1e55a8737763f942e57855642bc0b26c4f56488a26e4a529f7a1313c90c841b",
            "0x9b4538b664d96307f7279b329667bb1a20500c6ef42cbe85d4cec155c2a394a7580a8079e7316dd33f0bfc5f21b7493c3bfcd47b9113a5fe9b3201e12af91c271c",
            "0x5406d98ae258ac526fead2473a74fb6d75be61cd1b98ecc5d347a577b46152d0092646a471a3f9ce5a347e6e8aad9432cb76bbffb7130b81a838be3bb4c4a4431b",
            "0x1a6661c3b152a097460469a9418aee882381b8e250899ee4705e978544309f4551dbda2b54149ae7d12bff9abbb765ed5015787e02118f2a2a9875a2863e91621b",
            "0x0bd43f61b8955b157adb38b2b8c950a97d3737cb303136060e68586c1e45e3e535f5623da5266b0cbdbb39293b689769feacb69af29eb69a7375083fc655071c1c",
        ]
    };

const TEST_ACCOUNTS_SIGNATURES = {
    submissionId: '0x5375e914bbebb05653a2a02e7cb4b70a57362cea1b0320b4f2ae1beff04eb72e',
    signatures: [
        '0x8739753c733d542ebb0e2f25db41ab721fe10f75ca9e12a188a38e572ee0409612bbf18b29d90b3ce260edc871cc2050f60e1dae2a57b72a846467fbc05f712e1c',
        '0x2030661001b35c8df35a79f9c9c5f3aa84fb63c2f5c0a6aaf74c723b6508f76c209c6abb145e2facb1e0c0688cb47ab5bf7ab1c73369e96f826abd4cb218b9c61b',
        '0x2d9c63484bd0d47488415f1c1bd323795ff3c63a038a51d011129013d6912c9d7d2f4473d2669dc42ee0036f8222c703425caa0cf7b08a749d61d937af5e3f6c1b',
        '0xe945bd2e25f1877ad87abaf43b365f2db4fde9432134880deb56f7e27c98902865cb6fec6f9017a9c663f74172fc5a0dfc14d178e2af561471af7f997fba11d41c',
        '0x3ca28529a00a804af32da3416b4f769d4146354490b021ed33a2240a5bfd34e25f5d472a61818aeb11ad5ef4f5efceadfa12393def8c2a4dbbcc25482b35e6131c',
        '0x779b899f4048f93792df5c4b4e215ce35d3d3aaf05115af64d6d505278582fe2182024056d20d4a358e9b2220a1f850aa9520afc38aaf8e657cfa1b9063f9dfb1c',
        '0xccf1d9b34c15de45ada8fa482dd25c8c7a1d4888058bd0d37c5367b0db516e0a6af1b8d23e1c2540c1978a32e3a6aa81e4c5b8483a6ed64da516d5920c95c7941c',
        '0xd4a2ad7e6977479319e5d7f9458ba31b11ca232b5e4e81fd22e34b7b71aff46712d1549019c239b91282c4d46810d9cfb70dfc695e477e6d468648eb4429df621c',
        '0x0a1910d2c6fad980ba591afebb9c127be8d7623878db446928b257c21bee3e6e6502ffeedbac8f44243a8305775357694abc0c80157c455294ca518150b24bbf1c',
        '0x25147250b9bb47313359a88e29d81507b2669a9e85235809477dc2c618f5f1b8089c7f9985d19b4ff79e421e5d7cd11167bc5b77a79b5cbfab31f8c081bb71f71b',
        '0xc47cbb3b66747105002b96d94666d302b7de2e5942dd14ceaa1b4ff77d10c8677b908e88ddd372f17d6b996b90309542de1110a48ec68cd15d59b48a91ea99671c',
        '0xde04a22e46132bcffbe4601e47c2f913cd7133502b3ddb8469ca3a9984bf5ca67d67a2951f01749b54090747391bca8426b3607d5d5bd94bd05c464775c7f9e01c'
      ],
}

describe("Signature storage", function () {
    it("DeBridgeApiSignatureStorage", async function () {
        const storage = new DeBridgeApiSignatureStorage();
        const testCase = DEBRIDGE_API_TEST_CASE;
        const signatures = await storage.getSignatures(testCase.submissionId);
        expect(signatures)
            .to.have.all.members(testCase.signatures)
    });

    it("SignersSignatureStorage", async function () {
        const signers = (await ethers.getSigners()).slice(0, 12);
        const storage = new SignersSignatureStorage(signers);
        const testCase = TEST_ACCOUNTS_SIGNATURES;
        const signatures = await storage.getSignatures(testCase.submissionId);
        expect(signatures)
            .to.have.all.members(testCase.signatures)
    })
})