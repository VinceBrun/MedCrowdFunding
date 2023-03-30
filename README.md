# PROJECT TITLE
FUND-ME

# PROJECT DESCRIPTION
FUND-ME is a decentralized application for a medical crowd funding programs that allow patients who are unable to meet up with medical bills create campaigns and seek for support from philantropist and good willing individuals who will be compassionate enough to donate to the medical financial needs of the patients through donations to the campaign.

# NOTE: Use Goerli Network to test & url for patients campaign images.

# Deploying Contracts
To deploy medicalCrowdFunding.sol contract, just run one of the following command:

npm run deploy
# or
yarn deploy

# Clone the repository
git clone https://github.com/VinceBrun/MedCrowdFunding.git

# Install the dependencies
npm install

# Start the development server
npm run start

# INSIGHTS TO FUND-ME medicalCrowdFunding SMART CONTRACT

This is a Solidity smart contract that implements a medical crowdfunding platform. The contract allows patients to create campaigns to raise funds for medical treatment. The contract stores information about each campaign, including the patient's address, patient image, hospital note provided by the doctor, campaign title, campaign description, target amount to be raised, deadline, amount collected so far, and the addresses and donations of all the donors who have contributed to the campaign.

The contract has several functions. The checkEligibility function checks if a patient is eligible to create a campaign. The patient must provide a valid patient image and hospital note to create a campaign.

The createCampaign function is used to create a new campaign. It takes several parameters, including the patient's address, patient image, hospital note provided by the doctor, campaign title, campaign description, target amount to be raised, and deadline. The function first checks if the patient is eligible to create a campaign. If the patient is eligible and the deadline is in the future, the function creates a new campaign and stores it in the campaigns mapping. The function returns the ID of the newly created campaign.

The donateToCampaign function is used to donate to a campaign. The function takes an ID of a campaign and a donation amount as input. The function first gets the campaign from the mapping and then adds the donor's address and donation amount to the corresponding arrays in the campaign struct. The function then sends the donated amount to the patient's address and updates the amount collected so far.

The getDonators function is used to get the list of donors for a campaign. The function takes the ID of a campaign as input and returns two arrays: the addresses of all the donors and the corresponding donation amounts.

The getCampaigns function is used to get the list of all campaigns. The function returns an array of all campaigns that have been created so far.

The contract uses the mapping data structure to store information about all campaigns. The mapping data structure is similar to a hash table or dictionary, where each key maps to a value. In this contract, the key is an integer ID that is assigned to each campaign when it is created, and the value is a Campaign struct that stores information about the campaign.

The contract uses several Solidity features, such as structs, mappings, and modifiers, to implement the crowdfunding platform. The contract also uses the require function to check conditions before executing certain parts of the code. The require function is used to ensure that the patient is eligible to create a campaign and that the deadline is in the future before creating a new campaign. The require function is also used to ensure that the donated amount is sent successfully to the patient's address before updating the amount collected so far.


# medicalCrowdFunding Contract was deployed using THIRDWEB with the link and contract address below:
https://thirdweb.com/goerli/0x199f6162721845ceAf79815d812055f11b254284

# FUND-ME INTERFACE

The project was built with react.js.


# REFERENCES

JavaScript Mastery.

Kitwind.io.

Thirdweb.com.

React.js.

Tailwind.css.


# THANK YOU.

So help me God.
