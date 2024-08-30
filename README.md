# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Running a Vite + React Project
Prerequisites
Before you begin, ensure that you have the following installed on your machine:

Node.js (version 14.0.0 or later)
npm (Node Package Manager) or Yarn (alternative package manager)
Setup and Installation

1. Create a New Vite + React Project
   You can quickly scaffold a new Vite + React project using the command-line interface. Open your terminal and run:

bash
Copy code
npm create vite@latest my-react-app --template react
or, if you prefer using Yarn:

bash
Copy code
yarn create vite my-react-app --template react
Replace my-react-app with your preferred project name.

2. Navigate to Your Project Directory
   Move into the newly created project directory:

bash
Copy code
cd my-react-app 3. Install Dependencies
Install the required dependencies using npm or Yarn:

Using npm:

bash
Copy code
npm install
Using Yarn:

bash
Copy code
yarn install 4. Run the Development Server
Start the development server to preview your application:

Using npm:

bash
Copy code
npm run dev
Using Yarn:

bash
Copy code
yarn dev
This command will start the Vite development server, which will watch for changes in your code and automatically reload the application. By default, your app will be accessible at http://localhost:5173.

5. Open Your Project in a Browser
   Open your web browser and navigate to http://localhost:5173 to view your running React application.

Project Structure
Here is a brief overview of the default project structure created by Vite:

index.html: The main HTML file that includes the root div where React will mount the application.
src/: The source folder containing React components and other assets.
App.jsx: The main React component for your application.
main.jsx: The entry point for React, where the application is rendered into the DOM.
vite.config.js: The Vite configuration file for project-specific settings.
package.json: The file where project dependencies and scripts are defined.
Build for Production
To build your application for production, run:

Using npm:

bash
Copy code
npm run build
Using Yarn:

bash
Copy code
yarn build
The build output will be located in the dist directory. You can serve this directory using a static file server or deploy it to your hosting provider.

Additional Commands
npm run preview or yarn preview: Preview the production build locally.
Troubleshooting
If you encounter issues, consider the following steps:

Ensure Node.js and npm/Yarn are updated to the latest versions.
Check the terminal output for any error messages and follow the instructions provided.
Refer to the Vite documentation for additional help and advanced configuration options.
Conclusion
You now have a Vite + React project up and running. You can start developing your React application with the fast build times and modern features provided by Vite.

Account Component:

Overview:

The Account component is designed to display user account details in a responsive layout, accommodating both desktop and mobile views. It utilizes the react-responsive library to adapt the display based on screen size, rendering either a SideNavBar for larger screens or a MobileNavBar for smaller devices.

Features:

Responsive Design: Adapts the layout based on the viewport width to enhance user experience across devices.

User Information Display:

Presents detailed user information, including name, email, phone, role,last login, and account status.

Conditional Rendering: Switches between desktop and mobile navigation bars based on screen size.

Component Structure:

Imports:

useMediaQuery from react-responsive: Determines the screen size to apply responsive design.

MobileNavBar: Navigation component optimized for mobile devices.

SideNavBar: Navigation component designed for desktop views.

./Account.css: CSS file for styling the component.

State:

The component defines a userDetail object with the following properties:

id: User's unique identifier.

name: Full name of the user.

email: User's email addresses.

phone: User's contact number.

role: Roles assigned to the user.

lastLogin: Timestamp of the user's last login.

status: Current status of the user account.

Layout:

The Account component renders different layouts based on screen size:

Desktop View: Displays the SideNavBar and user details in a structured layout within a dashboard-container.

Mobile View: Utilizes the MobileNavBar and presents user details in a simplified format.

CSS Styling:

The component applies styles from Account.css:

dashboard-container: Main container for user details.

dashboard-heading: Title for the user details section.

user-detail-card: Card element to display user information.

webLogoo: Style for the user image.

Usage:

To integrate the Account component into your application, import it and include it in your render method or component hierarchy:

jsx
Copy code
import Account from './components/Account/Account';

Ensure that both SideNavBar and MobileNavBar components are correctly implemented and imported to support the responsive layout.

Dependencies:

react-responsive: For handling responsive design.

SideNavBar: Desktop navigation component.

MobileNavBar: Mobile navigation component.

2.ApexChart Component

Overview

The ApexChart component visualizes data using a line chart with dual y-axes. It employs the ReactApexChart library for rendering the chart and displays sales and order data over specified periods. The component is styled with custom CSS and includes an info icon for additional context.

Features

Dual Y-Axes: Displays two different metrics, "Sales" and "Orders," with independent scales.Smooth Curve: Provides a smooth line curve for better data visualization.Interactive Chart: Includes tooltips, zooming, and a customizable toolbar.Responsive Design: Adapts to various screen sizes with a full-width chart.

Component Structure

Imports

ReactApexChart from react-apexcharts: Library for rendering the chart.

./Charts.css: CSS file for component styling.

BsInfoCircle from react-icons/bs: Icon used for additional information.

Data:

Series Data:

Sales: Data points representing sales figures over time.

Orders: Data points representing order counts over time.

Options Configuration:

Chart Type: Line chart with zoom disabled.

X-Axis Categories: Date ranges for the data points.

Y-Axis: Two y-axes for "Sales" and "Orders," with independent scaling.

Stroke: Smooth curve with specified width for lines.

Colors: Custom colors for the lines in the chart.

Data Labels: Enabled for displaying data values on the chart.

Markers: Styled with specific size, color, and border.

Grid: Custom border color.

Legend: Positioned at the bottom with customization options.

Tooltip: Shared and non-intersecting tooltips for better data insight.

Layout:

Chart Container: A wrapper div with class chart-container for layout and styling.

Header: Contains a heading (salesHeading) and an info icon (BsInfoCircle) for additional context.

Chart Component: Renders the line chart with options and series data.

CSS Styling:

The component applies styles from Charts.css:

chart-container: Main container for the chart and header.

salesAndIcons: Container for the heading and info icon.

salesHeading: Styling for the chart heading.

Dependencies:

react-apexcharts: For rendering the chart.

apexcharts: Charting library required by react-apexcharts.

react-icons: For icons used in the component.

npm install react-apexcharts apexcharts

Customers Component

Overview:

The Customers component displays a list of customers fetched from an external API. It is designed to be responsive, utilizing the react-responsive library to switch between a desktop and mobile layout. The component fetches customer data on mount and displays it in a list format.

Features:

Responsive Layout: Adapts to desktop and mobile views using conditional rendering.

Data Fetching: Retrieves customer data from an external API and displays it.

Error Handling: Includes basic error handling for network requests.

Dynamic Rendering: Displays customer information in a list format.

Component Structure:

Imports:

useMediaQuery from react-responsive: To manage responsive design based on screen size.

SideNavBar: Navigation component for desktop view.

MobileNavBar: Navigation component for mobile view.

useEffect and useState from react: For managing component lifecycle and state.

./Customers.css: CSS file for styling the component.

State:

customerData: Array holding the customer data fetched from the API.

Effects:

useEffect: Fetches customer data when the component mounts.

Methods:

getCustomerData: Asynchronous function to fetch customer data from the API and update the state. Includes error handling for network issues.

Layout:

The Customers component conditionally renders based on the screen width:

Desktop View: Uses the SideNavBar component and displays a list of customers with detailed information.

Mobile View: Uses the MobileNavBar component and displays a simplified customer list.

CSS Styling

The component applies styles from Customers.css:

customers-container: Main container for the customer list.

customers-heading: Styling for the heading of the customer list.

customers-list: Styles for the list of customers.

customer-item: Styles for individual customer items.

Dependencies:

react-responsive: For managing responsive design.

SideNavBar: Navigation component for desktop.

MobileNavBar: Navigation component for mobile devices.

Layout Component:

Overview:

The Layout component is a core component responsible for defining the application's layout structure. It integrates various page components and handles routing for different paths within the application using react-router-dom. The component ensures a consistent layout with a Header and dynamically renders the appropriate page content based on the route.

Features:

Routing: Manages navigation between different pages using react-router-dom.

Header Integration: Includes a Header component that remains consistent across all routes.

Dynamic Content: Renders different components based on the current route.

Component Structure:

Imports:

Routes and Route from react-router-dom: For defining routes and rendering components based on the route.

Body: Component rendered at the root path.

Header: Navigation and header component displayed on all pages.

ProductsItem: Component for displaying product items.

Orders: Component for managing and displaying orders.

Returns: Component for handling product returns.

Customers: Component for managing customer information.

Shipping: Component for shipping details and management.

Calc: Component for various calculators.

Reports: Component for generating and displaying reports.

Account: Component for user account details and settings.

Layout:

Header: The Header component is included at the top of the layout and remains fixed across all routes.

Routes:

/: Renders the Body component, typically used for the main dashboard or landing page.

/inventory: Renders the ProductsItem component for managing product inventory.

/orders: Renders the Orders component for viewing and managing orders.

/returns: Renders the Returns component for processing and handling returns.

/customers: Renders the Customers component for managing customer data.

/shipping: Renders the Shipping component for managing shipping details.

/calc: Renders the Calc component for access to various calculators.

/reports: Renders the Reports component for generating and viewing reports.

/Accounts: Renders the Account component for user account settings.

CSS Styling

The component applies styles from the parent CSS file (not shown) for layout and styling:

layout: Container class for the overall layout, including the header and routed content.

Dependencies

react-router-dom: For handling routing and navigation within the application.

Header, Body, ProductsItem, Orders, Returns, Customers, Shipping, Calc, Reports, Account: Page components used for rendering different routes.

News Component:

Overview:

The News component displays the latest business news headlines fetched from an external news API. It manages the state for loading, error handling, and news data display. The component ensures a smooth user experience by showing loading indicators and handling errors gracefully.

Features:

Data Fetching: Retrieves top business headlines from the News API.

Loading State: Displays a loading message while fetching data.

Error Handling: Shows an error message if the data fetching fails.

Dynamic Rendering: Lists news headlines with publication dates and links to full articles.

Component Structure:

Imports:

useEffect and useState from react: For managing component lifecycle and state.

./News.css: CSS file for styling the component.

State:

newsData: Array holding the news articles fetched from the API.

loading: Boolean state indicating if data is currently being fetched.

error: String state holding error messages in case of a fetch failure.

Effects:

useEffect: Calls fetchData to fetch news data when the component mounts.

Methods:

fetchData: Asynchronous function to fetch news data from the API, update the newsData state, and handle errors. It also manages the loading and error states.

Conditional Rendering:

Loading State: Displays a loading message if loading is true.

Error State: Displays an error message if error is not null.

News Data: Displays the list of news articles when data is successfully fetched.

Layout:

news-container: Main container for the news content.

news-item: Container for individual news articles.

news-title: Styling for the title of each news article.

news-date: Styling for the publication date of each news article.

news-link: Link to the full article, opening in a new tab.

CSS Styling:

The component uses styles from News.css to format the news items and ensure a consistent appearance:

news-container: Main wrapper for news content.

news-item: Styling for individual news article items.

news-title: Styling for news article titles.

news-date: Styling for the publication date of news articles.

news-link: Styling for the "Read more" link.

Dependencies

react: For component lifecycle and state management.

API:

The component fetches data from the News API with the following endpoint:

https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=YOUR_API_KEY

MobileNavBar Component:

Overview:

The MobileNavBar component provides a responsive navigation sidebar for mobile devices, allowing users to access different sections of the dashboard. It integrates with the ConfigurationContext to manage the visibility of the sidebar based on user settings. The component displays a list of navigation items, each represented by an icon and a label, and provides a container for rendering child components.

Features:

Responsive Design: Adapts layout based on the showLeftNavbar value from the context.

Navigation Links: Provides links to various sections of the application.

Dynamic Sidebar: Shows or hides the sidebar based on configuration.

Component Structure:

Imports:

useContext from react: For accessing the ConfigurationContext.

Link from react-router-dom: For navigation between different routes.

ConfigurationContext: Context used to manage sidebar visibility.

@fortawesome/fontawesome-free/css/all.min.css: For Font Awesome icons.

./MobileNavBar.css: CSS file for styling the component.

Constants:

dashboardItems: Array of objects representing navigation items, including:

name: The name of the menu item.

icon: The Font Awesome icon class for the item.

path: The route path for the link.

Context:

showLeftNavbar: Boolean value from ConfigurationContext used to toggle the visibility of the sidebar.

Rendered Elements:

container_default: Main container for the sidebar and main content area.

sidebar: Sidebar element that contains navigation links.

nav_list: Unordered list of navigation items.

nav_item: List item for each navigation link.

nav_link: Styled link element for navigation.

nav_text: Text label for each navigation item.

main_content_area: Area where child components are rendered.

Conditional Styling

container_shift: Applied when showLeftNavbar is true to shift the main content area.

sidebar_show: Applied when showLeftNavbar is true to show the sidebar.

CSS Styling:

The component uses styles from MobileNavBar.css to format the sidebar and main content area:

container_default: Default container styling.

container_shift: Applies a shift effect when the sidebar is visible.

sidebar: Styling for the sidebar element.

sidebar_show: Styling to show the sidebar when showLeftNavbar is true.

sidebar_header: Header styling for the sidebar.

nav_list: Styles the navigation list.

nav_item: Styles each navigation item.

nav_link: Styles the navigation links.

nav_text: Styles the text labels for navigation items.

main_content_area: Styles the main content area where child components are rendered.

Dependencies:

react: For state management and context handling.

react-router-dom: For routing and navigation.

@fortawesome/fontawesome-free: For icon fonts.

PieChartComp Component:

Overview:

The PieChartComp component renders a pie chart using the ReactApexChart library. It visually represents the distribution of sales between two platforms: WooCommerce Store and Shopify Store. The component includes interactive features such as dynamic center labels that update on hover, providing detailed information about each slice of the pie chart.

Features:

Pie Chart Visualization: Displays sales data in a pie chart format.

Interactive Labels: Updates the center label with detailed information on hover.

Responsive Design: Adjusts to fit the container dimensions.

Component Structure:

Imports:

useState from react: For managing the center label state.

ReactApexChart from react-apexcharts: For rendering the pie chart.

BsInfoCircle from react-icons/bs: For displaying an information icon.

./PieChartComp.css: CSS file for styling the component.

Constants:

series: Array containing the sales data for each segment of the pie chart.

labels: Array of labels corresponding to each segment of the pie chart.

total: Total sales value calculated from the series data.

State:

centerLabel: State to manage the text displayed in the center of the pie chart.

Options:

chart: Configuration for the chart type, height, width, and event handlers.

labels: Defines the labels for each segment of the pie chart.

plotOptions: Customizes the pie chart, including data label offsets.

dataLabels: Enables data labels on the chart.

legend: Configuration for the legend display.

colors: Defines the colors for each segment of the pie chart.

tooltip: Disables tooltips for the chart.

fill: Sets the fill colors for the chart segments.

Inline Styles

Container Styles: Applied to the chart container for layout and design.

Title and Icon Styles: Aligns the heading and icon at the top of the chart.

Center Label Styles: Positions and styles the center label within the pie chart.

CSS Styling:

The component uses inline styles and a CSS file (PieChartComp.css) for layout and appearance:

Container Styles: Includes background color, box shadow, padding, and border radius.

Title and Icon Styles: Aligns title and icon with flexbox.

Center Label Styles: Positions the center label in the middle of the pie chart.

Dependencies:

react: For state management and rendering.

react-apexcharts: For rendering the pie chart.

react-icons: For including icons in the component.
