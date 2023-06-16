<script>
  import { onMount } from 'svelte'
  import Title from '../components/Title.svelte'

  let showPage = false

  onMount(() => {
    setTimeout(() => {
      showPage = true
    }, 2000)
  })
</script>

{#if showPage}
  <div class={showPage ? 'block w-screen h-full bg-main-pattern relative' : 'hidden'}>
    <div class="max-w-app-container w-full mx-auto zero:mt-[46px] md:mt-[161px]">
      <div class="mb-[132px] justify-between w-full zero:hidden md:flex">
        <div class="ml-[100px] mt-[68px]">
          <h1 class="uppercase font-rubik-mono-one text-3xl text-black overflow-hidden">
            dragonfly<br /> in the<br /> sun
          </h1>
          <div class="w-full max-w-[334px] font-montserrat text-xl gap-6 mt-12 flex flex-col">
            <p class="">Boutique software and nodes for web3 and p2p technology</p>
            <p class="">
              Specialist development and application of open source software to hard problems of
              transparency and trust in the digital space.
            </p>
          </div>
        </div>
        <div class="mr-[50px]">
          <img width="456" src="/favicon.svg" alt="" class="" />
        </div>
      </div>
      <div class="flex mb-[67px] flex-col px-12 w-full zero:flex md:hidden">
        <h1
          class="uppercase font-rubik-mono-one zero:hidden xs:block text-3xl text-black overflow-hidden"
        >
          dragonfly in the sun
        </h1>
        <h1
          class="uppercase font-rubik-mono-one text-xl zero:block xs:hidden text-black overflow-hidden"
        >
          dragonfly<br /> in the<br /> sun
        </h1>
        <img width="456" src="/favicon.svg" alt="" class="mt-5" />
        <div class="font-montserrat zero:text-lg xs:text-xl gap-6 mt-14 flex flex-col">
          <p class="">Boutique software and nodes for web3 and p2p technology</p>
          <p class="">
            Specialist development and application of open source software to hard problems of
            transparency and trust in the digital space.
          </p>
        </div>
      </div>
      <div
        class="bg-white w-full zero:px-12 sm:px-20 zero:pt-32 md:px-[162px] md:pt-[137px] pb-[387px] relative z-30"
      >
        <Title variant="h1" text="Semi Fungible Tokens (SFT) & IPFS hosting" />
        <Title
          variant="h2"
          text="Dragonfly has spent 2+ years developing the smart
      contracts, indexing, automated decentralised storage node hardware and software for SFTs."
          className="my-10"
        />
        <Title
          variant="h2"
          text="Dragonfly is a primary infrastructure and development provider for Gild Lab, who use the SFT
      software to develop industry relationships and apply the infrastructure provided by Dragonfly to
      specific use cases."
          className="mb-10"
        />
        <Title
          variant="h2"
          text="SFTs offer a higher degree of transparency and regulatory compliance for token
      issuers who need to represent offchain assets on the blockchain. The core innovation of SFT is
      a hybrid ERC20/ERC1155 token system where minting and burning of an ERC20 token is always pairwise
      with an NFT that can track evidence of the provenance of the offchain assets."
          className="mb-10"
        />
        <Title
          variant="h2"
          text="Auditors can review
      the state of the offchain and onchain assets at any moment and freeze/unfreeze the token if they
      are dissatisfied with the integrity of the token issuer."
          className="mb-10"
        />
        <Title
          variant="h2"
          text="The hashes of all evidence used in the
      audit process are broadcast on the blockchain, indexed by a dedicated Subgraph, then made available
      on the IPFS file storage network. This way, anyone who is a token holder can download and retain
      a permanent copy of all audit information for their token simply by running an IPFS node. If there
      is ever suspected fraud at the token layer, the token holders can use the same evidence that informed
      the auditors historically to bring a legal case in whatever jurisdiction will host it."
          className="mb-10"
        />
        <Title
          variant="h2"
          text="The system
      is fully open source and decentralised, anyone can create an SFT token, and it is on them to adhere
      to all transparency and regulatory requirements, as any token issuer must. Dragonfly DOES NOT issue
      any tokens itself. It makes money in the same way as many companies that develop open source, by
      maintaining systems and business relationships on top of the open source code."
          className="mb-3"
        />
        <Title
          variant="h2"
          text="Dragonfly operates
      physical IPFS nodes for audit trail hosting on behalf of anyone who does not want to maintain the
      infrastructure themselves. Dragonfly also develops tools for auditors and token holders to review
      SFT tokens permisionlessly."
          className="mb-20"
        />
        <Title variant="h1" text="Programmable SFT token liquidity & governance" />
        <Title
          variant="h2"
          text="Dragonfly works closely
      with Rain protocol to develop Rainlang. Rainlang is a novel language that runs on the Ethereum
      Virtual Machine (EVM) to allow smart contract logic to be written without compiling to native EVM
      bytecode."
          className="my-10"
        />
        <Title
          variant="h2"
          text="This has several transparency, security and efficiency benefits, and is simply easier
      to write, with a learning curve much closer to making an Excel spreadsheet than doing rocket science
      (which is what blockchain work often feels like). This enables next generation decentralised application
      logic such as programmable token governance, onchain trading strategies, escrow/insurance style
      products, hybrid offchain/onchain business rules, etc."
          className="mb-10"
        />
        <Title
          variant="h2"
          text="Rain allows SFT token issuers to more easily
      program onchain how third parties interact with their token, a goal that is usually prohibitively
      expensive and risky, or simply unattainable for the average token issuer."
          className="mb-20"
        />
        <Title variant="h1" text="Gilded tokens" />
        <Title
          variant="h2"
          text="Dragonfly designed and developed Gilded Tokens with Gild Labs. Trustless collateral such
      as ETH can be deposited, minting a second token according to a price oracle such as the current
      gold price. The second token can be transferred and traded independent of the backing collateral,
      with a floating price somewhere between 0 and the current mint price, creating a semi-stable, but
      fully collateralised and non-liquidating token."
          className="my-10"
        />
        <Title
          variant="h2"
          text="Gilded Tokens are a long term economic experiment,
      to be paired with more traditional token peg maintenance and issuance as per SFT and Rain based
      liquidity provisioning."
          className="mb-20"
        />
        <Title variant="h1" text="Web3 expertise" />
        <Title
          variant="h2"
          text="Dragonfly software developers have years of “full stack” expertise
      in open source web3 and p2p software development. Notably, working with Holo and AllianceBlock
      for years on decentralised technologies, including designing and implementing novel solutions to
      hard problems from the ground up."
          className="mt-10"
        />
      </div>
    </div>
    <img
      height="323"
      src="/layer-2-bkground-mountain.svg"
      alt=""
      class="absolute bottom-0 z-10 -right-2"
    />
  </div>
  <img
    src="/layer-4-foreground-stream.svg"
    alt=""
    class={showPage ? 'block -mt-[277px] relative z-40 w-screen zero:hidden sm:block' : 'hidden'}
  />
  <img
    src="/layer-4-mobile.svg"
    alt=""
    class={showPage ? 'block -mt-[277px] relative z-40 w-screen zero:block sm:hidden' : 'hidden'}
  />
{:else}
  <div class="w-screen h-[300vh] bg-main-pattern relative" />
{/if}
