const mongoose=require('mongoose')

const Schema= new mongoose.Schema(
    {
        url: {type:String},
        name: {type:String},
        type: {type:String},
        stars:{type:Number} ,
        numberOfGuests: {type:Number},
        address: {type:String},
        roomType: {type:String},
        location: {
          lat:{type:Number},
          lng: {type:Number}
        },
        reviews: [ {
            author: {
                firstName:{type:String} ,
                hasProfilePic: {type:Boolean},
                id: {type:String},
                pictureUrl: {type:String},
                smartName: {type:String},
                thumbnailUrl: {type:String}
              },
              comments:{type:String} ,
              createdAt: {type:String},
              id: {type:String},
              collectionTag: {type:Boolean},
              rating: {type:Number},
              recipient: {
                firstName: {type:String},
                hasProfilePic: {type:String},
                id: {type:String},
                pictureUrl: {type:String},
                smartName: {type:String},
                thumbnailUrl:{type:String}
              },
              response: {type:String},
              localizedDate: {type:String},
              localizedReview: {type:String}}],
            pricing: {
                rate: {
                  amount: {type: Number},
                  amountFormatted: {type: String },
                  currency: {type: String},
                  isMicrosAccuracy: {type: Boolean}},
                rateType: {type: String}},
        photos: [
          {
            caption: {type:String},
            pictureUrl: {type:String},
            thumbnailUrl: {type:String}
          }
        ],
        primaryHost: [{
          id: {type: Number},
          firstName: {type: String},
          isSuperHost: {type: Boolean},
          hasProfilePic: {type: Boolean},
          smartName: {type: String},
          about: {type: String},
          memberSince: {type: String},
          languages: {type: [String]},
          responseRate: {type: String},
          responseTime: {type: String},
          hasInclusionBadge: {type: Boolean},
          badges: {type: [String]},
          hostUrl: {type: String},
          pictureUrl: {type: String},
          thumbnailUrl: {type: String}
        }],
        additionalHosts:[{
          id: {type: Number},
          firstName: {type: String},
          isSuperHost: {type: Boolean},
          hasProfilePic: {type: Boolean},
          smartName: {type: String},
          about: {type: String},
          memberSince: {type: String},
          languages: {type: [String]},
          responseRate: {type: String},
          responseTime: {type: String},
          hasInclusionBadge: {type: Boolean},
          badges: {type: [String]},
          hostUrl: {type: String},
          pictureUrl: {type: String},
          thumbnailUrl: {type: String}
        }],
        isHostedBySuperhost:{type:Boolean} ,
        isAvailable: {type:Boolean},
        listingAmenities: [
          {
            description: {type:String},
            id: {type:Number},
            isPresent: {type:Boolean},
            name: {type:String}
          }
          ],
        rootAmenitySections: [
          {
            id: {type:String},
            title: {type:String},
            subtitle: {type:String},
            amenityIds: {type:Number}
          }],
        seeAllAmenitySections: [
          {
            id: {type:String},
            title: {type:String},
            subtitle: {type:String},
            amenityIds: {type:Number}
          }
        ],
        bathroomLabel: {type:Number},
        bedLabel:{type:Number},
        bedroomLabel: {type:Number},
        hasHouseRules: {type:Boolean},
        id: {type:Number},
        isNewListing:{type:Boolean},
        listingRooms: [
          {
            beds: [
              {
                id: {type:String},
                quantity: {type:Number},
                type:{type:String}
              }
            ],
            id: {type:Number},
            roomNumber: {type:Number}
          }
        ],
        p3SummaryAddress:{type:String},
        roomTypeCategory: {type:String},
        sectionedDescription: {
          access: {type:String},
          authorType: {type:String},
          description:{type:String},
          houseRules:{type:String},
          interaction:{type:String},
          locale: {type:String},
          localizedLanguageName: {type:String},
          name: {type:String},
          neighborhoodOverview: {type:String},
          notes: {type:String},
          space: {type:String},
          summary: {type:String},
          transit: {type:String}
        },
        tierId: {type:Number},
        guestControls: {
          allowsChildren: {type:Boolean},
          allowsEvents: {type:Boolean},
          allowsInfants: {type:Boolean},
          allowsPets: {type:Boolean},
          allowsSmoking: {type:Boolean},
          personCapacity: {type:Number},
          structuredHouseRules: [{type:String}],
          structuredHouseRulesWithTips: [
            {
              key: {type:String},
              longTermText: {type:String},
              text: {type:String},
              airmojiKey: {type:String}
            }
          ],
          allowsNonChinaUsers: {type:Boolean}
        },
        hasSpecialOffer: {type:Boolean},
        maxNights: {type:Number},
        minNights: {type:Number},
        priceDetails: [
          {
            label: {type:String},
            value: {type:String},
            attributeType: {type:String}
          }
        ],
        hasWeWorkLocation: {type:Boolean},
        isBusinessTravelReady: {type:Boolean},
        hometourRooms: [
          {
            details: [],
            highlightsHometour: [
              {type:String}
            ],
            highlightsPreview: [],
            isShared: {type:Boolean},
            id: {type:Number},
            name: {type:String},
            nameWithType: {type:String},
            photos: [],
            roomTypeId: {type:Number},
            icons: [
              {
                type: {type:String},
                url: {type:String}
              }
            ]
          }
        ],
        hometourSections: [],
        descriptionLocale: {type:String},
        initialDescriptionAuthorType: {type:String},
        localizedCheckInTimeWindow: {type:String},
        localizedCheckOutTime:{type:String},
        city: {type:String},
        country: {type:String},
        countryCode: {type:String},
        hasHostGuidebook: {type:Boolean},
        hasLocalAttractions: {type:Boolean},
        neighborhoodCommunityTags: [],
        state: {type:String},
        paidGrowthRemarketingListingIds: [],
        hasCommercialHostInfo: {type:Boolean},
        reviewDetailsInterface: {
          reviewCount: {type:Number},
          reviewSummary: [{
              value: {type:String},
              label: {type:String},
              localizedRating: {type:String},
              percentage: {type:Number}
            }]
        },
        reviewsOrder: {type:String},
        nearbyAirportDistanceDescriptions: [],
        renderTierId: {type:Number},
        isHotel: {type:Boolean},
        showReviewTag: {type:String},
        isRepresentativeInventory: {type:String},
        localizedCity: {type:String},
        highlights: [
          {
            type: {type:String},
            message: {type:String},
            headline: {type:String},
            position: {type:String},
            icon: {type:String}
          }
        ],
        highlightsImpressionId: {type:String},
        categorizedPreviewAmenities: [
          {
            category: {type:String},
            amenities:{type:String}
          }
        ],
        pointOfInterests: [],
        chinaPointsOfInterestMatcha: {},
        pageViewType: {type:String},
        previewTags: [],
        seeAllHometourSections: [],
        enableHighlightsVoting: {type:String},
        listingExpectations: [
          {
            title:{type:String},
            type: {type:String},
            airmojiKey: {type:String}
          }
        ],
        localizedListingExpectations: [
          {
           title:{type:String},
            type: {type:String},
            airmojiKey: {type:String}
          }
        ],
        heroModule: {
          categorizedPhotos: []
        },
        reviewsModule: {
        localizedOverallRating:{type:String},
        appreciationTags: []
        },
        availabilityModule: {},
        additionalHouseRules: {type:String},
        sortedReviews: [],
        documentDisplayPictures: [],
        sections: [],
        metadata: {},
        p3ImpressionId: {type:String},

        idStr: {type:String},
        paidGrowthRemarketingListingIdsStr: []
    }
)

mongoose.pluralize(null)
const groupModel = mongoose.model('Data',Schema)

module.exports = groupModel