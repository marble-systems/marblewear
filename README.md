![Screenshot from 2022-01-08 12-04-26 (1)](https://user-images.githubusercontent.com/52397472/148657082-6b1400c6-92a4-4a46-a771-767d59e93017.png)

# MarbleWear
### Table of Contents
1. [General Info](#General-Info)
2. [Demo](#Demo)
4. [Installation](#Installation-and-Setup)
5. [Contributors](#Contributors)
6. [File Structure](#File-Structure)

### General Info
MarbleWear is a responsive e-commerce app built in React.

### Demo
#### Overview
![overview](https://user-images.githubusercontent.com/52397472/148659220-8c23f4a3-56cf-4fd3-b193-64bde6b65a25.gif)

#### Related Items
![related](https://user-images.githubusercontent.com/52397472/148659222-1c8a6fcf-d0f8-4b68-9156-0fa3cc2d4371.gif)

#### Question & Answers
![qa](https://user-images.githubusercontent.com/52397472/148659229-1d364789-4e48-44bd-ab73-af52ba8b830a.gif)

#### Rating & Reviews
![Peek 2022-01-08 14-23](https://user-images.githubusercontent.com/52397472/148657043-8ca583e9-8392-4651-93c2-590f06b22dec.gif)

### Installation and Setup
1. Add a config.js file to the /server directory with the following line of code:
`module.exports.api_key = 'github_api_key';`
3. Clone down the repo `$ git clone https://github.com/marble-systems/front-end-capstone.git`
4. cd into the cloned repo `$ cd ../front-end-capstone`
5. install dependencies `$ npm i`
Development
5. start webpack-dev-server `$ npm run start`
6. start server `$ npm run start-server`
Production
5. build bundle `$ npm run build`
6. start server `$ npm run start-server`

### Contributors
- [Alexander Huerta](https://github.com/alexander-huerta)
- [Regina Grogan](https://github.com/RehReis)
- [Samuel Beddow](https://github.com/beddo018)
- [Aaron Finsrud](https://github.com/aaronfinsrud)

### File Structure
```
.
├── App.jsx
├── NavBar.jsx
├── ProductDetails
│   ├── DropDownsAndButtons.jsx
│   ├── Features.jsx
│   ├── ImageGallery.jsx
│   ├── prodStyles.css
│   ├── ProductOverview.jsx
│   ├── SloganDescription.jsx
│   └── StyleSelector.jsx
├── QandA
│   ├── AddAnswer.jsx
│   ├── AddQuestion.jsx
│   ├── AnswerListEntry.jsx
│   ├── QuestionListEntry.jsx
│   ├── QuestionList.jsx
│   └── Utilities.js
├── RelatedItems
│   ├── ActionButton.jsx
│   ├── AddOutfit.jsx
│   ├── ComparisonModal.jsx
│   ├── images
│   │   ├── addIcon.png
│   │   ├── checkButton.png
│   │   ├── deleteButton.png
│   │   └── starButton.png
│   ├── noImageAvailable.jpeg
│   ├── ProductCard.jsx
│   ├── relatedItemsData.js
│   ├── RelatedItems.jsx
│   ├── relatedItemsStyle.css
│   ├── RelatedProducts.jsx
│   └── YourOutfit.jsx
├── Reviews
│   ├── ReviewList
│   │   ├── AddReviewForm
│   │   │   └── AddReviewForm.jsx
│   │   ├── ReviewListEntry
│   │   │   └── ReviewListEntry.jsx
│   │   └── ReviewList.jsx
│   ├── reviews.css
│   ├── reviewsData.js
│   ├── Reviews.jsx
│   └── ReviewSummary
│       ├── AverageRating
│       │   └── AverageRating.jsx
│       ├── ProductBreakdown
│       │   ├── CharacteristicBar.jsx
│       │   └── ProductBreakdown.jsx
│       ├── RatingBreakdown
│       │   ├── RatingBreakdown.jsx
│       │   └── StarRatingBar.jsx
│       └── ReviewSummary.jsx
└── SharedComponents
    ├── Modal.jsx
    └── Stars.jsx
```

