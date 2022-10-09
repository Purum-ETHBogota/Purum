![Purum Logo](https://i.postimg.cc/NFRNMrWP/Purum-Logo.png)

# Purum 
Purum is a community of land stewards farming gourmet CO2 tokens. 

## Description 
Purum enables landowners to pledge their lands for restoration initiatives. Initiatives are represented by dynamic geo-referenced NFTs that update their ecological state weekly. Additionally, Purum estimates how much CO2 will be stored by the land and issues a native SuperFluid token that then gets streamed to the NFT owner at the same rate CO2 is stored.

![Purum Screens](https://i.postimg.cc/W305XkX6/Cover.png)

## Take it for a spin

[Demo](https://purum.vercel.app/)

## How it's made?
Purum issues geo-referenced NFTs on the @Polygon chain for ease of use, low transaction cost, and low environmental impact. 

Purum assumes the existence of a central authority that notarizes land deeds and validates land coordinates, this section of the solution uses an MD5 algorithm to encrypt the information and produce a hash that confirms ownership of land and coordinates. 

This information is then used by the dapp to query an off-chain API called Agromonitoring and request NDVI data (Vegetation Index) and a satellite image of the land. Purum uses @Chainlink's AnyAPI to call the Agromonitoring API and get the land data. The image from Agromonitoring and the land coordinates are then stored in IPFS for decentralized storage. Purum also uses @Chainlink's Keepers to periodically call Agromoitoring and update an ecological state variable in the smart contract. 

Using the ecological state variable in the smart contract, Purum uses node.js to create a function that calculates the amount and rate of CO2 the land stores. Purum then uses @Superfluind to get mint a native CO2 token that gets streamed back to the NFT owner at the same rate CO2 gets stored. 

Finally, Purum also uses Poket to access a decentralized RPC network.

## Bounties we are applying for

- **Polygon** for best local LATAM public goods or Refi project(s) 

Link: (FALTA LINK)

Description: Our idea tackles a local(Latam) use case in the ReFi space. Our idea explores how land owners can turn their land into a regeneration project that stores CO2 and rewards land stewardship in real-time to make regeneration in Latam sustainable. Our idea uses Polygon for ease of use, low transaction cost and low environmental impact. 

- **IPFS** for best use of NFT.storage

Link: (FALTA LINK)

Description: Our idea uses NFT.storage to store the coordinates of a geo-referenced polygon and an image requested from a satellite imaging API.

- **WalletConnect** for best projects that use WalletConnect v2.0 Track

Link:(FALTA LINK)

Description: Our solution uses WalletConnect's new modal to reduce the friction for non savvy users.

- **Superfluid** for best overall project, Most Innovative hack, Best NFT Hack, and Honorable Prize Pools

Link: (FALTA LINK)

Description: We use Superfluid to stream a Super Fluid native CO2 equivalent token to NFT owners at the same rate CO2 is stored by their land. 

- **Poket Network** for the Just Build Prize

Link: (FALTA LINK)

Description: We use Pocket Network as RPC provider. 

- **Lens** for best mobile UX

Link: (FALTA LINK)

Description: We created a mobile UX but we didn't implement Lens

- **Chainlink** for projects using Chainlink

Link: (FALTA LINK)

Description: We implemented Chainlink's AnyAPI and Keepers

## Team
- Luis Mendez

- Sebastian Meneses 

- Wilman Vinieza

- Daniel Olarte



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
