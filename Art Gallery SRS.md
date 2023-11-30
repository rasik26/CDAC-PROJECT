

**Document**: System Requirement Specification Document

**Title**: E-Commerce Art Gallery

**Objective**:
- The objective of an E-commerce art gallery is to provide a platform for artists to showcase and sell their artworks online, offering a convenient and accessible way for art enthusiasts to explore, purchase, and appreciate art from the comfort of their homes. 
- The platform aims to facilitate transactions, promote artists, and create a vibrant online art community.

**Scope**:
- Design and implement an user-friendly interface that ensures ease of navigation for both artists and viewers. 
- Develop a feature that allows artists to effortlessly showcase their artwork with high-quality images and detailed descriptions.
- Implement filter functionalities to help viewers easily discover artworks based on categories, styles, artists, and other relevant criteria.


## Overview

- Anyone can use this application and browse the available paintings,sculptures,art etc. but in order to make a purchase paintings or place an order, a user needs to log in using their unique email and password. By visiting the registration page, unregistered members can do so.
- This proposed system can be used by any naïve users and does not require any educational level, experience, or technical expertise in the computer field. However, it will be of good use if the user has good knowledge of how to operate a computer.

## Functional Requirement

This section provides a requirement overview of the system. Various functional modules that can be implemented by the system will be:

## System architecture

   System Description:

- The online art gallery platform/website will serve as a marketplace for artists to showcase and sell their artwork, and for viewers to browse and purchase art.
- The platform will include features such as user registration and authentication, artwork search and browsing, artist profiles, product pages, shopping cart, checkout process, and payment integration.
  
   System Architecture:
   
- The system architecture will consist of a front-end interface developed using a suitable web development framework or platform.
- The back-end will include a database to store user information, artwork details, and transaction data.
- Integration with a secure and reputable payment gateway will be implemented for seamless and secure payment processing.

   Presentation Layer:

- Web Interface:User-friendly web pages for artwork browsing, shopping cart, and user/admin profiles.Responsively designed for various devices.
- User Interface Framework:HTML, CSS, and JavaScript for client-side interactions.Frameworks like React or Angular for dynamic and responsive UI.
- Web Server:Apache or Nginx to handle HTTP requests.SSL/TLS for secure communication.

   Application Layer:

- Application Server:Node.js, Django, or Flask to handle application logic.Manages user authentication, shopping cart operations, and transaction processing.
- Business Logic:Modules for user authentication, artwork management, and transaction processing.Integration with payment gateways for secure transactions.
- RESTful API:Defines communication between the front-end and back-end.Enables data retrieval for artwork details, user profiles, etc.
- Middleware:Connects the application to the database.Handles server-side operations and communicates with the database layer.
  
       **Data Layer**:

- Database:MySQL, PostgreSQL, or MongoDB for storing user data, artwork details, and transaction history.Tables for users, artists, artworks, orders, etc. 
- Database Server:Manages database operations efficiently.Ensures data integrity and security.

## Functional Requirements:

    ## User Registration and Authentication:-

       **Registration**:
- Users can create an account by providing necessary details such   as username, email, and password.
- The system shall validate the uniqueness of usernames and email addresses during registration.
- Passwords must meet security criteria (e.g., minimum length, combination of characters).

       **Authentication**:
- Registered users can log in using their credentials.
- The system shall securely authenticate users and grant access to authorized functionalities.
- Passwords must be securely hashed and stored.

       **Forgot Password**:
- Users should be able to initiate a password reset process by receiving a secure link via email.

    ## Artwork Search and Browsing:  

       **Search Functionality**:
- Users should be able to search for artwork using keywords, artist names, or categories.
- Implement an advanced search option with filters such as medium, style, and price range.

       **Browse by Categories**:
- Artwork should be categorized logically (e.g., paintings, sculptures, photography).
- Users can browse and explore artwork within specific categories.

       **Artist Profiles**:
- Each artwork should be linked to the respective artist's profile.
- Users can explore an artist's portfolio and other available artworks.

       **Image Galleries**:
- Display high-quality images or a gallery for each artwork, allowing users to view it from multiple angles.

    ## Product Pages:

       **Artwork Pages**:
- Each artwork should have a dedicated page displaying detailed information.
- Include the artwork's title, artist, medium, dimensions, description, and price.

       **Add to Cart**:
- Include an "Add to Cart" button on each product page.
- Users should be able to add multiple artworks to their shopping cart.

       **Quantity Selection**:
- Allow users to select the quantity of each artwork they wish to purchase.


       **Artwork Reviews**:
- Enable users to leave reviews and ratings for each artwork.
- Display an average rating on the product page.

       **Availability Status**:
- Clearly indicate whether the artwork is in stock or currently unavailable.


    ## Shopping Cart:  

       **Add and Remove Items**:
- Users can easily add artworks to the shopping cart from product pages.Allow users to remove items from the cart.

       **Cart Summary**:
- Display a summary of items in the cart, including quantity, individual prices, and a subtotal.


       **Quantity Adjustment**:
- Users can adjust the quantity of each artwork directly within the shopping cart.


       **Price Update**:
- Dynamically update the total price in real-time as users modify the contents of their shopping cart.


       **Cart Empty**:
- StateDisplay a friendly message and suggestions when the shopping cart is empty.

    ## Checkout Process:

       **Checkout Button**:
- Clearly present a prominent "Checkout" button for users to proceed to the checkout process.

    ## Payment Integration:
  
       **Payment Gateway Integration**:
- Integrate a secure and reputable payment gateway (e.g.,PhonePay,Gpay,Paytm) to facilitate online transactions.

       **Supported Payment Methods**:
- Support various payment methods, including credit cards, debit cards, digital wallets, and other relevant options commonly used in the art market.
    
	   **Transaction Processing**:
- Implement a smooth transaction process, including authorization, payment capture, and handling of refunds or cancellations for art purchases.

    ## User Profile Management:  
       
       **User Registration**:
- Users should be able to create a new account by providing essential information, such as username, email, and password.

       **Profile Creation and Editing**:
- Allow users to create and edit their profiles, including details like name, contact information, profile picture, and any additional relevant information.
 
    ## Artist Profiles:
  
       **Artist Registration**:
- Artists should be able to register on the platform, providing necessary details such as name, contact information, a biography, and examples of their work.

       **Portfolio Management**:
- Allow artists to create and manage their portfolios, showcasing a collection of their artworks along with detailed information about each piece.
  
       **Artwork Submission**:
- Provide a mechanism for artists to submit their artworks for approval before being displayed on the platform. Include details such as title, description, medium, dimensions, and pricing.

       **Social Media Integration**:
- Allow artists to link their social media profiles to their artist profiles, facilitating easy sharing of their work on other platforms.

       **Artist Ratings and Reviews**:

- Implement a rating and review system for artists and their artworks, providing feedback from buyers and potentially influencing future buyers.

       **Notification System**:
- Implement a notification system to inform artists about the status of their submitted artworks, sales, and any other relevant updates.

       **Communication Tools**:
- Include messaging or communication tools that allow potential buyers to contact artists directly with inquiries or commission requests.

       **Event Promotion**:
- If the platform hosts art events or exhibitions, provide features for artists to promote their participation and for users to discover and attend these events.

       **Artwork Categories and Tags**:
- Allow artists to categorize and tag their artworks appropriately, making it easier for users to discover specific types of art.

    ## Order History and Tracking  

        **Order Placement**:
- Users should be able to place orders for artworks, specifying quantities and providing shipping information.

        **Order Confirmation**:
- Upon successful order placement, send an email confirmation to the user with details of the order, including artwork information, pricing, and shipping details.

        **Order Tracking**:
- Implement a system that allows users to track the status and location of their orders in real-time, providing updates on the shipping and delivery process.

        **Order History**:
- Maintain a comprehensive order history for each user, displaying details such as order date, order number, artwork details, quantity, total price, and status.

        **Order Modification**:
- Allow users to modify their orders within a specified timeframe, including changes to quantities, shipping addresses, or even cancellation of orders.

        **Shipping Options**:
- Provide users with multiple shipping options, including standard shipping, express shipping, and any other relevant choices. Display associated costs and estimated delivery times.

        **Shipping Confirmation**:
- Send users a shipping confirmation email once their order has been dispatched, including tracking information if applicable.

        **Delivery Confirmation**:
- Send users a delivery confirmation email upon successful delivery of their order, requesting feedback and providing any relevant post-purchase information.

        **Return and Refund Process**:
- Clearly outline the return and refund process, allowing users to initiate returns, specify reasons, and track the progress of their return requests.

        **Refund Confirmation**:
- Send users a confirmation email upon successful processing of a refund, including details of the refunded amount and any relevant information.
   
        **Invoice Generation**:
- Generate and provide users with downloadable invoices for each order, including a breakdown of prices, taxes, and any applicable fees.

        **Responsive Design**:
- Ensure that the order history and tracking features are accessible and user-friendly on various devices, including desktops, tablets, and mobile phones.

    ## Admin Panel 
 
        **User Management**:
- Allow administrators to manage user accounts, including the ability to create, view, edit, and deactivate user accounts.

        **Artist Management**:
- Provide tools for administrators to manage artist profiles, including approval processes for new artists, editing capabilities, and deactivation if needed.

        **Artwork Management**:
- Enable administrators to manage the artworks displayed on the platform, including approval processes, editing capabilities, and removal if necessary.

        **Order Management**:
- Implement features to view and manage customer orders, including order details, status updates, and the ability to process cancellations or modifications.

        **Inventory Management**:
- Allow administrators to manage the inventory of artworks, including tracking stock levels, marking items as sold, and restocking if necessary.
  
    ## Dashboard:
- Create a centralized dashboard for administrators, offering a quick overview of key metrics, recent activities, and important notifications.

        **Content Management**:
- Enable administrators to manage content displayed on the platform, including text, images, and announcements.
  
        **Notification System**:
- Implement a notification system to alert administrators of important events, such as new orders, artist submissions, or system updates.
  
        **Artist and Customer Communication**:
- Enable administrators to communicate with artists and customers through the platform, facilitating efficient and centralized communication.


## Non-Functional Requirements:

- Non-functional requirements for an e-commerce art gallery project are aspects that define how the system should perform, rather than specific features or functionalities. 
    
   ## Performance:
- Response Time: Define acceptable response times for various operations (e.g., loading a page, processing a transaction).
- Scalability: The system should be able to handle an increasing number of users, artworks, and transactions without significant performance degradation.
- Throughput: Specify the number of transactions or operations the system should handle within a given time frame.

   ## Reliability: 
       
- Availability: Specify the acceptable system uptime, ensuring that    the platform is available for users.
- Fault Tolerance: Define how the system should handle errors, crashes, or other failures without losing data or compromising user experience.

   ## Security:
- Authentication and Authorization: Clearly define how user authentication and authorization should be handled to ensure secure access to sensitive information.
- Data Encryption: Specify the encryption standards for data in transit and at rest, especially for sensitive customer information and transaction details.
- Payment Security: Ensure compliance with industry standards for secure payment processing, such as PCI DSS.

   ## Compatibility:  
- Browser Compatibility: Specify which browsers the system should be compatible with to ensure a consistent user experience.
- Device Compatibility: Ensure that the platform works seamlessly on various devices such as smartphones, tablets, and desktops.

   ## Maintainability:

- Code Maintainability: Specify coding standards and practices to ensure that the codebase is easy to understand, update, and maintain.
- Documentation: Require comprehensive documentation for developers, administrators, and end-users to facilitate system maintenance.

   ## Performance:

- Load Testing: Conduct load testing to ensure that the system can handle the expected user load without performance issues.
- Caching Mechanism: Implement an effective caching mechanism to optimize the performance of frequently accessed data.

## User Interface

   ## Home Page:

- The home page should be visually appealing and showcase a selection of featured artworks from various artists. It should include a search bar, categories, and filters to help users find specific artworks or artists. The home page should also have CTAs for signing up, logging in, and browsing artworks.

   ## SignUp/Login:

- The signup and login pages should be simple and intuitive, allowing users to easily create an account or log in to their existing one. The signup page should include fields for username, email, password, and confirmation password. The login page should include fields for email or username and password, with options to recover a forgotten password. Both pages should have clear calls-to-action (CTAs) and error messages for incorrect inputs.

   ## Artwork Listings:
- The artwork listings page should display a grid or list view of all available artworks, with options to sort by price, popularity, or date added. Each artwork should have a high-quality image, title, artist name, medium, dimensions, and price. Users should be able to click on an artwork to view its details page.

   ## Categories and Filters:
- Categorize artworks by style, genre, artist, and medium.Implement filters to allow users to narrow down their search.

   ## Search Bar:
- Include a prominent search bar for users to find specific artists or art works easily.

   ## Product Page: 
- The product page should provide a detailed view of the selected artwork, including multiple images from different angles, a description of the artwork, the artist's bio, and any related information. The product page should also include CTAs for adding the artwork to the cart or wishlist.
- High-Quality Images:Showcase multiple high-resolution images of the artwork from various angles, including close-ups for detailed views.
- Price and Availability:Clearly state the price of the artwork and indicate its availability status.If applicable, include options for different editions or sizes with corresponding prices.
- Add to Cart Button:Feature a prominent "Add to Cart" button for easy purchasing.Display the current number of items in the user's cart.
- Customer Reviews:Integrate a customer review section to showcase feedback and ratings for the specific artwork.
- Add to Wishlist Button:Feature a prominent "Add to Wishlist" button for easy purchasing.Display the current number of items in the user's wishlist.

   ## Cart Page:
- The cart page should display all selected artworks with their respective quantities and prices, as well as a subtotal and total price. Users should be able to remove items from the cart or adjust quantities directly on this page. The cart page should also have CTAs for proceeding to checkout or returning to browsing artworks.

   ## WishList:  
- The wishlist page should allow users to save artworks they are interested in for future reference. Each artwork in the wishlist should have a thumbnail image, title, artist name, medium, dimensions, and price. Users should be able to remove items from their wishlist or add them directly to their cart from this page.

   ## Artist Dashboard:  
- The user dashboard should provide an overview of the artist account information, artworks posted, artworks sold, total profit. The dashboard should also include CTAs for managing account settings or contacting customer support if needed.

   ## Checkout Pages:  
- The checkout pages should guide users through the payment process securely and efficiently. The first page should confirm the user's order details and shipping address. The second page should display the total price of the order and allow users to select their preferred payment method (e.g., credit card, debit card, digital wallet). The third page should confirm the user's order details again before submitting it for processing. Users should receive an email confirmation with order details once their order has been successfully processed by the system.
