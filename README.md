# Notion Weather Widget

This is a simple weather widget I made to use in my Notion page. By default, this widget is set up to display the weather in Nairobi, but it can easily be customized to display the weather in any location.

## Customizing the Widget

To customize the widget for your location, you will need to make changes to the src/script.js file. Follow these steps:

    1. Open the src/script.js file in a code editor.

    2. Look for the following line of code:

    `el.innerHTML = '<a class="weatherwidget-io" href="https://forecast7.com/en/n1d2936d82/nairobi/" data-label_1="NAIROBI" data-label_2="HOME" data-font="Noto Serif" data-icons="Climacons Animated" data-theme="original" data-basecolor="#dfd4e9" data-shadow="#ffffff" data-textcolor="#4b4747" data-highcolor="#4b4747" data-lowcolor="#4b4747" data-suncolor="#ffffff" data-cloudfill="#c2e4fc" data-raincolor="#163664">NAIROBI HOME</a>';`

    3. This line of code sets up the weather widget to display the weather in Nairobi. You will need to update the URL to point to the weather forecast for your location. You can find the URL for your location on forecast7.com.

    4. Once you have updated the URL, save the src/script.js file.

## Running the Widget Locally

To run the widget locally, you will need to have Node.js installed on your computer. Once you have installed Node.js, follow these steps:

    1. Clone this repository to your local machine.

    2. Open a terminal and navigate to the root directory of the repository.

    3. Run the following command to install the dependencies:

    `npm install`

    4. Run the following command to build the widget:

    `npm run build`

    This will create a dist folder with the built widget files.

    5. Open the index.html file in a web browser to view the widget.

## Deploying the Widget

To deploy the widget, you can use GitHub Pages. Follow these steps:

    1. Go to the "Settings" tab of your repository.
    2. Scroll down to the "GitHub Pages" section.
    3. Under "Source", select "main branch" (or "master" if you're using an older version of GitHub).
    4. Click "Save".
    5. Wait for a few minutes for the changes to take effect.
    6. Your widget should now be accessible at https://your-username.github.io/weather-widget-notion/.

## Using the Widget in Notion

To use the widget in a Notion page, follow these steps:

    1. Open the page where you want to add the widget.

    2. Click the "+" button to add a new block.

    3. Select "Embed" from the list of block types.

    4. Copy and paste the deployed link into the embed block.

    5. The widget should now be visible in your notion. Resize it however you see fit.
