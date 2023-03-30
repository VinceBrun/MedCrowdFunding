// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract medicalCrowdFunding {
    // Define a struct to represent a campaign
    struct Campaign {
        address payable patient;            // Address of the patient who created the campaign
        string patientImage;                // Image of the patient
        string hospitalNoteByDoctor;        // Hospital note provided by the doctor
        bool isVerified;                    // Flag to indicate if the campaign is verified
        string title;                       // Title of the campaign
        string description;                 // Description of the campaign
        uint256 target;                     // Target amount to be raised
        uint256 deadline;                   // Deadline for the campaign
        uint256 amountCollected;            // Amount collected so far
        address[] donators;                 // Addresses of all the donators
        uint256[] donations;                // Donation amounts made by all the donators
    }

    // Mapping to store all the campaigns
    mapping(uint256 => Campaign) public campaigns;

    // Counter to keep track of the number of campaigns
    uint256 public numberOfCampaigns = 0;

    // Function to check if the patient is eligible to create a campaign
    function checkEligibility(string memory _patientImage, string memory _hospitalNoteByDoctor) public pure returns(bool) {
        // Check if patient image and hospital note are valid
        if (bytes(_patientImage).length == 0 || bytes(_hospitalNoteByDoctor).length == 0) {
            return false;
        }

        // If all checks pass, return true
        return true;
    }

    // Function to create a new campaign
    function createCampaign(
        address _patient, string memory _patientImage, string memory _hospitalNoteByDoctor, string memory _title, 
        string memory _description, uint256 _target, uint256 _deadline
    ) public returns (uint256) {
        // Check if the patient is eligible to create a campaign
        require(checkEligibility(_patientImage, _hospitalNoteByDoctor), "Patient is not eligible to create campaign");

        // Check if the deadline is in the future
        require(_deadline > block.timestamp, "The deadline should be a date in the future.");

        // Create a new campaign and store it in the mapping
        Campaign storage campaign = campaigns[numberOfCampaigns];
        campaign.patient = payable(_patient);
        campaign.patientImage = _patientImage;
        campaign.hospitalNoteByDoctor = _hospitalNoteByDoctor;
        campaign.isVerified = false;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;

        // Increment the campaign counter
        numberOfCampaigns++;

        // Return the ID of the newly created campaign
        return numberOfCampaigns - 1;
    }

    // Function to donate to a campaign
    function donateToCampaign(uint256 _id) public payable {
        // Get the campaign from the mapping
        Campaign storage campaign = campaigns[_id];

        // Add the sender's address to the list of donators
        campaign.donators.push(msg.sender);

        // Add the donation amount to the list of donations
        campaign.donations.push(msg.value);

        // Send the donated amount to the patient
        (bool sent,) = payable(campaign.patient).call{value: msg.value}("");

        // If the transaction was successful, update the amount collected
        if(sent) {
            campaign.amountCollected += msg.value;
        }
    }

    // Function to get the list of donators for a campaign
    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        // Return the addresses of all the donators and the corresponding donations for a campaign
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    // Function to get the list of all campaigns
    function getCampaigns() public view returns (Campaign[] memory) {
        // Create a new Campaign array with size equal to the number of campaigns
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        // Loop through all the campaigns
        for(uint i = 0; i < numberOfCampaigns; i++) {
            // Get the current campaign from the mapping
            Campaign storage item = campaigns[i];

            // Add the campaign to the allCampaigns array
            allCampaigns[i] = item;
        }

        // Return the array of all campaigns
        return allCampaigns;
    }
}
