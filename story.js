let topTitleDiv =
  '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + 
  "<h4 style='font-size: 2.0em; margin-bottom: 40px'>2024 Fall &nbsp | &nbsp Data Visualization &nbsp | &nbsp Final Project</h4>" +
  "<h1 style='font-size: 5.0em;'>Apartment Energy Usage and Property Prices in New York</h1>" +
  "<h5 style='font-size: 3.0em;'>Johnmasataka Xianfeng Jiang";

let question = 
  '<h1 style="font-size: 3.0em;">When you rent or purchase an apartment, have you ever imagined how much electricity and natural gas your unit will cost?</h1>';

let descriptionDiv =
  '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' +

  question +

  '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>';

let footerDiv =
  '<p>2024 Fall | Data Visualization | Final Project | Author: Johnmasataka Xianfeng Jiang | Instructor: Jia Zhang</p>';

let divChapter1 =
  "<h3>Chapter 1: Annual Electricity Usage Per Square Foot for Each Apartment in New York</h3>" +
  "<p>In 2022, the annual electricity usage in each apartment in New York ranged from 13,112.2 to 40,280,213.3 kilowatt-hours (kWh), with a median of 986,685.6 kWh (range from 0 to 16.19 kWh/sqft, with a median of 105.57 kWh/sqft).</p>";

let divChapter2 =
  "<h3>Property Price Per Square Foot for Each Apartment in New York</h3>" ;

let divChapter3 =
  "<h3>Cluster Chart: Annual Electricity Usage / Property Price</h3>" +
  '<iframe src="cluster_electricity_price.html" style="border: none; width: 1000px; height: 1000px;"></iframe>' ;

let divChapter4a =
  "<h3 style = 'font-size: 2.0em'>Case Study: An Expensive Apartment with Low Electricity Usage</h3>" +
  '<img src="images/900 Fifth Avenue_2.webp">' + 
  '<img src="images/900 Fifth Avenue_3.webp">' + 
  "<p style='max-width:600px;'>· Property: 900 Fifth Avenue</p>"+ 
  "<p style='max-width:600px;'>· Price: $4336.16/sqft</p>"+ 
  "<p style='max-width:600px;'>· Electricity Usage: 23.88Kwh/sqft/year</p>"+ 
  "<p style='max-width:600px;'>· Borough: Manhattan</p>"+ 
  "<p style='max-width:600px;'>· Year Built: 1959</p>"+ 
  "<p style='max-width:600px;'>· GFA: 183714 sqft</p>"+ 
  "<p style='max-width:600px;'>· Air Conditioning: Central</p>"+ 
  "<p style='max-width:600px;'>· Location: Between 70th and 71st Streets, across from Central Park, and next to The Frick Museum</p>"+ 
  "<p style='max-width:600px;'>· Building: Designed by Sylvan Bien, the building has 19 stories and 50 unit</p>"+ 
  "<p style='max-width:600px;'>· Amenities: 24-hour doorman, concierge, gym, bike room, two outdoor spaces, storage, and garage</p>"+ 
  "<p style='max-width:600px;'>· Features: Elegant lobby and elevators with wood paneling and polished stone floors, two sets of bay windows, and a white brick facade</p>" + 
  '<img src="images/900 Fifth Avenue_4.png">'+ 
  "<p style='max-width:600px;'>· In the 2000s, 900 Fifth Avenue received financing for renovations and interior upgrades, including an HVAC system upgrade. Additionally, the building has fewer high-electricity-consuming amenities (like large commercial kitchens, extensive outdoor lighting, pools, etc.). According to online reviews, some units used as second homes or investment properties that are often vacant, leading to low electricity consumption.</p>" ; 

let divChapter4b =
  "<h3 style = 'font-size: 2.0em'>Case Study: A Cheap Apartment with High Electricity Usage</h3>" +
  '<img src="images/1145 President St_1.png">' +
  '<img src="images/1145 President St_2.webp">' +
  "<p style='max-width:600px;'>· Property: 1145 President St</p>"+ 
  "<p style='max-width:600px;'>· Price: $425.52/sqft</p>"+ 
  "<p style='max-width:600px;'>· Electricity Usage: 105.57Kwh/sqft/year</p>"+ 
  "<p style='max-width:600px;'>· Borough: Brooklyn</p>"+
  "<p style='max-width:600px;'>· Year Built: 1915</p>"+ 
  "<p style='max-width:600px;'>· Stories: 4</p>"+ 
  "<p style='max-width:600px;'>· Units: 16</p>"+ 
  "<p style='max-width:600px;'>· Building Sq. Ft.: 16,320 Sq. Ft.</p>"+ 
  "<p style='max-width:600px;'>· 1145 President St is a relatively old building. Although there have been a couple of appliance upgrades in the past decades, the building has been poorly maintained. It might have issues like leaky windows and inefficient appliances that increase electricity usage. Additionally, this building lacks modern insulation and energy-efficient systems, leading to higher heating and cooling costs.</p>" ; 

let divChapter5a = `
  <div style="display: flex; justify-content: left; align-items: center; margin-left: 103px; margin-bottom: -75px;">
      <h3>Case Study: Same Electricity Usage But Different Prices</h3>
  </div>
  <div style="display: flex; justify-content: left; align-items: center; margin-left: 103px; margin-bottom: -20px;">
      <p>The three properties listed below have similar electricity usage (around the median of 16.19 kWh/sqft/year), but their prices vary. All of them are relatively old and have similar building materials and structures. However, the prestige, convenience, and amenities around their locations contribute to the price differences.</p>
  </div>
  <div style="display: flex; justify-content: center; align-items: center; flex-wrap: nowrap;">
    <div style="margin-right: 5px; text-align: center;">
      <img src="images/1800 Pitkin Ave_1.png" style="width: 300px; height: 200px;">
      <p style='max-width:300px;'>· Property: 1800 Pitkin Avenue</p>
      <p style='max-width:300px;'>· Price: $121.33/sqft</p>
      <p style='max-width:300px;'>· Electricity Usage: 16.33Kwh/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Brooklyn</p>
      <p style='max-width:300px;'>· Year Built: 1915</p> 
      <p style='max-width:300px;'>· GFA: 80700 sqft</p> 
    </div>
    <div style="margin-right: 5px; text-align: center;">
      <img src="images/1780 Davidson Ave_1.png" style="width: 300px; height: 200px;">
      <p style='max-width:300px;'>· Property: 1780 Davidson Avenue</p>
      <p style='max-width:300px;'>· Price: $715.29/sqft</p>
      <p style='max-width:300px;'>· Electricity Usage: 16.05Kwh/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Bronx</p>
      <p style='max-width:300px;'>· Year Built: 1928</p> 
      <p style='max-width:300px;'>· GFA: 42450 sqft</p> 
    </div>
    <div style="text-align: center;"> 
      <img src="images/3 East 71st Street_1.jpg" style="width: 300px; height: 200px;">
      <p style='max-width:300px;'>· Property: 3 East 71st Street</p>
      <p style='max-width:300px;'>· Price: $4095.38/sqft</p>
      <p style='max-width:300px;'>· Electricity Usage: 16.19Kwh/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Manhattan (Upper East)</p>
      <p style='max-width:300px;'>· Year Built: 1948</p> 
      <p style='max-width:300px;'>· GFA: 80860 sqft</p> 
    </div>
  </div>`;

let divChapter5b = `
  <div style="display: flex; justify-content: left; align-items: center; margin-left: 103px; margin-bottom: -75px;">
      <h3>Case Study: Same Price But Different Electricity Usage</h3>
  </div>
  <div style="display: flex; justify-content: left; align-items: center; margin-left: 103px; margin-bottom: -20px;">
      <p>The three properties listed below have similar prices (around the median of $713.21/sqft), but their electricity consumption varies. 133-27 39th Avenue (right) consumes the most electricity as it is a modern apartment that utilizes an all-electric energy system, meaning it does not use any natural gas. 832 Knickerbocker Avenue (middle), an older building, has not undergone extensive renovations; however, its relatively small size leads to efficient electricity usage. 2401 Nostrand Avenue (left) has a low renter risk rating (6/100 at augrented.com), indicative of low occupancy, which results in lower average electricity usage.</p>
  </div>
  <div style="display: flex; justify-content: center; align-items: center; flex-wrap: nowrap;">
    <div style="margin-right: 5px; text-align: center;">
      <img src="images/2401 Nostrand Avenue_1.jpg" style="width: 300px; height: 200px;">
      <p style='max-width:300px;'>· Property: 2401 Nostrand Avenue</p>
      <p style='max-width:300px;'>· Price: $713.21/sqft</p>
      <p style='max-width:300px;'>· Electricity Usage: 7.05Kwh/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Brooklyn</p>
      <p style='max-width:300px;'>· Year Built: 1955</p> 
      <p style='max-width:300px;'>· GFA: 245631 sqft</p> 
    </div>
    <div style="margin-right: 5px; text-align: center;">
      <img src="images/832 Knickerbocker Ave_1.png" style="width: 300px; height: 200px;">
      <p style='max-width:300px;'>· Property: 832 Knickerbocker Avenue</p>
      <p style='max-width:300px;'>· Price: $712.59/sqft</p>
      <p style='max-width:300px;'>· Electricity Usage: 48.34Kwh/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Brooklyn</p>
      <p style='max-width:300px;'>· Year Built: 1994</p> 
      <p style='max-width:300px;'>· GFA: 24123 sqft</p> 
    </div>
    <div style="text-align: center;"> 
      <img src="images/133-27 39th Ave_1.jpg" style="width: 300px; height: 200px;">
      <p style='max-width:300px;'>· Property: 133-27 39th Avenue</p>
      <p style='max-width:300px;'>· Price: $718.91/sqft</p>
      <p style='max-width:300px;'>· Electricity Usage: 93.36Kwh/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Queens (Flushing)</p>
      <p style='max-width:300px;'>· Year Built: 2016</p> 
      <p style='max-width:300px;'>· GFA: 431449 sqft</p> 
    </div>
  </div>`;

let divChapter6 =
  "<h3>Chapter 2: Annual Natural Gas Usage Per Square Foot for Each Apartment in New York</h3>" + 
  "<p>In 2022, the annual natural gas usage in each apartment in New York ranged from 0 to 87,335,610.2 kilo British thermal units (kBTU), with a median of 3,240,799.9 kBTU (range from 0 to 322.53 kBTU/sqft, with a median of 56.96 kBTU/sqft).</p>";

let divChapter7 =
  "<h3>Property Price Per Square Foot for Each Apartment in New York</h3>"; 

let divChapter8 =
  "<h3>Cluster Chart: Annual Natural Gas Usage / Property Price</h3>" +
  '<iframe src="cluster_natural_gas_price.html" style="border: none; width: 1000px; height: 1000px;"></iframe>';

let divChapter9a =
  "<h3 style = 'font-size: 2.0em'>Case Study: An Expensive Apartment with Low Natural Gas Usage</h3>" +
  '<img src="images/900 Fifth Avenue_2.webp">' + 
  '<img src="images/900 Fifth Avenue_3.webp">' + 
  "<p style='max-width:600px;'>· Property: 900 Fifth Avenue</p>"+ 
  "<p style='max-width:600px;'>· Price: $4336.16/sqft</p>"+ 
  "<p style='max-width:600px;'>· Natural Gas Usage: 0.3 kBTU/sqft/year</p>"+ 
  "<p style='max-width:600px;'>· Borough: Manhattan (Upper East)</p>"+ 
  "<p style='max-width:600px;'>· Year Built: 1959</p>"+ 
  "<p style='max-width:600px;'>· GFA: 183714 sqft</p>"+ 
  "<p style='max-width:600px;'>· Air Conditioning: Central</p>"+ 
  "<p style='max-width:600px;'>· Location: Between 70th and 71st Streets, across from Central Park, and next to The Frick Museum</p>"+ 
  "<p style='max-width:600px;'>· Building: Designed by Sylvan Bien, the building has 19 stories and 50 unit</p>"+ 
  "<p style='max-width:600px;'>· Amenities: 24-hour doorman, concierge, gym, bike room, two outdoor spaces, storage, and garage</p>"+ 
  "<p style='max-width:600px;'>· Features: Elegant lobby and elevators with wood paneling and polished stone floors, two sets of bay windows, and a white brick facade</p>" + 
  "<p style='max-width:600px;'>· 900 Fifth Avenue uses alternative heating and cooling methods, such as electric heating systems, heat pumps, and central air systems that are powered by electricity. In addition, this property underwent renovations to include modern conveniences and energy-efficient systems. According to online reviews, some units used as second homes or investment properties that are often vacant, resulting to low electricity consumption.</p>"; 

let divChapter9b =
  "<h3>Case Study: A Cheap Apartment with High Natural Gas Usage</h3>" +
  '<img src="images/272 east 7th street_1.png">' +
  '<img src="images/272 east 7th street_2.jpg">' +
  "<p style='max-width:300px;'>· Property: 272 East 7th Street</p>"+
  "<p style='max-width:300px;'>· Price: $989.70/sqft</p>"+
  "<p style='max-width:300px;'>· Natural Gas Usage: 322.53 kBTU/sqft/year</p>"+
  "<p style='max-width:300px;'>· Borough: Manhattan (Alphabet City)</p>"+ 
  "<p style='max-width:300px;'>· Year Built: 1900</p>"+
  "<p style='max-width:300px;'>· GFA: 13206 sqft</p>"; 

let divChapter10a = `
  <div style="display: flex; justify-content: left; align-items: center; margin-left: 103px; margin-bottom: -75px;">
      <h3>Case Study: Same Natural Gas Usage But Different Prices</h3>
  </div>
  <div style="display: flex; justify-content: left; align-items: center; margin-left: 103px; margin-bottom: -20px;">
      <p>The three properties listed below have similar natural gas usage (around the median of 56.96 kBTU/sqft/year), but their prices differ significantly. Although the sizes of these buildings vary, 1265 Gerard Avenue is extremely well-occupied, whereas 945 Fifth Avenue has a relatively high vacancy rate.</p>
  </div> 
  <div style="display: flex; justify-content: center; align-items: center; flex-wrap: nowrap;">
    <div style="margin-right: 5px; text-align: center;">
      <img src="images/1265 Gerard Avenue_2.png" style="width: 300px; height: 400px;">
      <p style='max-width:300px;'>· Property: 1265 Gerard Avenue</p>
      <p style='max-width:300px;'>· Price: $109.17/sqft</p>
      <p style='max-width:300px;'>· Natural Gas Usage: 58.52 kBTU/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Bronx</p>
      <p style='max-width:300px;'>· Year Built: 1927</p> 
      <p style='max-width:300px;'>· GFA: 67724 sqft</p> 
    </div>
    <div style="margin-right: 5px; text-align: center;">
      <img src="images/9 West 20th Street_1.jpg" style="width: 300px; height: 400px;">
      <p style='max-width:300px;'>· Property: 9 West 20th Street</p>
      <p style='max-width:300px;'>· Price: $1931.90/sqft</p>
      <p style='max-width:300px;'>· Natural Gas Usage: 58.35 kBTU/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Manhattan (Midtown)</p>
      <p style='max-width:300px;'>· Year Built: 1910</p> 
      <p style='max-width:300px;'>· GFA: 27379 sqft</p> 
    </div>
    <div style="text-align: center;"> 
      <img src="images/945 5th Avenue_1.jpeg" style="width: 300px; height: 400px;">
      <p style='max-width:300px;'>· Property: 945 Fifth Avenue</p>
      <p style='max-width:300px;'>· Price: $3943.09/sqft</p>
      <p style='max-width:300px;'>· Natural Gas Usage: 55.09 kBTU/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Manhattan (Upper East)</p>
      <p style='max-width:300px;'>· Year Built: 1948</p> 
      <p style='max-width:300px;'>· GFA: 209723 sqft</p> 
    </div>
  </div>`;

let divChapter10b = `
  <div style="display: flex; justify-content: left; align-items: center; margin-left: 103px; margin-bottom: -75px;">
      <h3>Case Study: Same Price But Different Natural Gas Usage </h3>
  </div>
  <div style="display: flex; justify-content: left; align-items: center; margin-left: 103px; margin-bottom: -20px;">
      <p>The three apartments listed below have different natural gas usage but similar prices (around the median of $713.21/sqft). 91 Attorney Street is a newly constructed building, equipped with contemporary kitchen appliances and heaters, which help reduce natural gas consumption. At 1775 Davidson Avenue, most units use alternative energy for heating. 226 East 119th Street is an older building with infrequent renovations, which results in poor airtightness and inefficient energy use. </p>
  </div>
  <div style="display: flex; justify-content: center; align-items: center; flex-wrap: nowrap;">
    <div style="margin-right: 5px; text-align: center;">
      <img src="images/226 East 119th St_1.png" style="width: 300px; height: 200px;">
      <p style='max-width:300px;'>· Property: 226 East 119th Street</p>
      <p style='max-width:300px;'>· Price: $766.74/sqft</p>
      <p style='max-width:300px;'>· Natural Gas Usage: 206.84 kBTU/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Manhattan (East Harlem)</p>
      <p style='max-width:300px;'>· Year Built: 1910</p> 
      <p style='max-width:300px;'>· GFA: 40383 sqft</p> 
    </div>
    <div style="margin-right: 5px; text-align: center;">
      <img src="images/1775 Davidson Ave_1.png" style="width: 300px; height: 200px;">
      <p style='max-width:300px;'>· Property: 1775 Davidson Avenue</p>
      <p style='max-width:300px;'>· Price: $715.29/sqft</p>
      <p style='max-width:300px;'>· Natural Gas Usage: 14.70 kBTU/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Bronx</p>
      <p style='max-width:300px;'>· Year Built: 1929</p> 
      <p style='max-width:300px;'>· GFA: 51400 sqft</p> 
    </div>
    <div style="text-align: center;"> 
      <img src="images/91 Attorney St_1.jpg" style="width: 300px; height: 200px;">
      <p style='max-width:300px;'>· Property: 91 Attorney Street</p>
      <p style='max-width:300px;'>· Price: $711.50/sqft</p>
      <p style='max-width:300px;'>· Natural Gas Usage: 4.52 kBTU/sqft/year</p>
      <p style='max-width:300px;'>· Borough: Manhattan (Lower East Side)</p>
      <p style='max-width:300px;'>· Year Built: 2018</p> 
      <p style='max-width:300px;'>· GFA: 35308 sqft</p> 
    </div>
  </div>`;

let divChapter11 =
  "<h3>Conclusion</h3>" +
  "<p style='max-width:65%; font-size: 1.5em'>·&nbsp Renovation and maintenance significantly influence energy usage irrespective of a building's price.</p>"+
  "<p style='max-width:65%; font-size: 1.5em'>·&nbsp Occupancy rates and amenity types are key factors in energy consumption patterns.</p>"+
  "<p style='max-width:65%; font-size: 1.5em'>·&nbsp Building price and energy usage are interconnected, but the relationships are not always straightforward. </p>"+
  "<p style='max-width:65%; font-size: 1.5em'>·&nbsp Location and building age also play significant roles in shaping these relationships.</p>";

var config = {
  style: "mapbox://styles/johnmasataka/cm3hsqpof007101r26ev52mye", 
  accessToken: 'pk.eyJ1Ijoiam9obm1hc2F0YWthIiwiYSI6ImNtNG12ZmN5ZTAxcDAybHExeGQ2ZTAxYTUifQ.i_J5d_bvdfo0ohv3PwH4Pg',
  showMarkers: false,
  markerColor: "#ffffff",
  theme: "dark",
  use3dTerrain: true,
  topTitle: topTitleDiv,
  subtitle: "",
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    
    {
      id: "electricity",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-74, 40.725], 
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 1, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "electricity", opacity: 0, duration: 300 },
      ],
    },
 
    {
      id: "electricityPrice1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 1, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price", opacity: 0, duration: 300 },
      ],
    },

    {
      id: "electricityPrice2",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price", opacity: 0, duration: 300 },
      ],
    },

    {
      id: "electricityPriceCase1",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4a,
      location: {
        center: [-73.967281, 40.7719126], 
        zoom: 18,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 1, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
      ],
    },

    {
      id: "electricityPriceCase2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4b,
      location: {
        center: [-73.9523072, 40.6684044],
        zoom: 19,
        zoomSmall: 14,
        pitch: 40,
        bearing: 8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 1, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_large", opacity: 0, duration: 300 },
      ],
    },

    {
      id: "electricityPrice3",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5a,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price", opacity: 0, duration: 300 },
      ],
    },

    {
      id: "electricityPrice4",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5b,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price", opacity: 0, duration: 300 },
      ],
    },

    {
      id: "naturalGas",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "natural_gas", opacity: 1, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "natural_gas", opacity: 0, duration: 300 },
      ],
    },

    {
      id: "naturalGasPrice1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 1, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
      ],
    },

    {
      id: "naturalGasPrice2",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter8,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
      ],
    },
 
    {
      id: "naturalGasPriceCase1",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter9a,
      location: {
        center: [-73.967281, 40.7719126], 
        zoom: 18,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 1, duration: 300 },
      ],
      onChapterExit: [
      ],
    },

    {
      id: "naturalGasPriceCase2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter9b,
      location: {
        center: [-73.977259, 40.7231924], 
        zoom: 19,
        zoomSmall: 14,
        pitch: 40,
        bearing: -8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 1, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
    },

    {
      id: "naturalGasPrice3",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter10a,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
      ],
    },

    {
      id: "naturalGasPrice4",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter10b,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
      ],
    },
 
    {
      id: "naturalGasPrice4",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter11,
      location: {
        center: [-74, 40.725],
        zoom: 11,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        { layer: "electricity", opacity: 0, duration: 300 },
        { layer: "price", opacity: 0, duration: 300 },
        { layer: "price_large", opacity: 0, duration: 300 },
        { layer: "natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
        { layer: "price_natural_gas_large", opacity: 0, duration: 300 },
      ],
      onChapterExit: [
        { layer: "price_natural_gas", opacity: 0, duration: 300 },
      ],
    },
  ],
};
