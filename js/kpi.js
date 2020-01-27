if(performance.navigation.type == 2){
  console.log( 'Page load due to a back button click. Reloading to refresh the Performance.gov report. ' );
  location.reload(true);
}

function myFunctionA() {
  document.getElementById("wrapper").innerHTML = codeBlockA
}


var codeBlockA =   '<p>Explore over 10 years of SBA loan data geographically and overlaid with population and GDP data for context. Drill down to the individual loan level and filter by loan type and state. To learn more, view the overview of SBA Loan Guaranty Programs.</p>' + '<h3>Nationwide SBA Loan Distributions</h3>' + '<p>Click on a state to update the graph below the map. To reset the zoom in the visualization and see beyond the continental U.S., please click the home icon on the map. </p>' + '<p>The Microloan data below represent the loan dollars distributed to intermediaries, not the number of loans or loan dollars distributed to individual small businesses participating in the microloan program.</p>' + '<a class="usa-button usa-button-secondary" href="https://www.usaspending.gov/#/download_center/award_data_archive"> Loan Data</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8474" id="no-frame-border" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunctionB() {
  document.getElementById("wrapper").innerHTML = codeBlockB
}


var codeBlockB =   '<p>Explore over 10 years of SBA loan data geographically and overlaid with population and GDP data for context. Drill down to the individual loan level and filter by loan type and state. To learn more, view the overview of SBA Loan Guaranty Programs.</p>' + '<h3>Heat Map of Loan Distributions to the County Level</h3>' + '<p>To reset the zoom in the visualization and apply selected filters, please click the home icon on the map. </p>' + '<a class="usa-button usa-button-secondary" href="https://www.usaspending.gov/#/download_center/award_data_archive"> Loan Data</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.census.gov/data/datasets/time-series/demo/popest/2010s-national-total.html">Census Data</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.bea.gov/data/gdp/gdp-state">GDP Data</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8472" id="no-frame-border" frameborder="0" style="height:1130px;width:1050px;"></iframe>';


function myFunction() {
  document.getElementById("wrapper").innerHTML = codeBlock
}


var codeBlock =   '<h3>Federal Employee Veiwpoint Survey - Improve Performance <em>(Updated December 2019)</em></h3>' + '<p>The Office of Personnel Management Federal Employee Viewpoint Survey measures employee perception of whether, and to what extent, conditions characteristic of successful organizations are present in their agencies.</p>' + '<p>The dashboard below compares 2017 and 2018 government-wide scores for two performance-related metrics, showing percentage change in conditions that lead to employee engagement and steps taken to deal with a poor performer who cannot or will not improve their work performance. </p>' + '<a class="usa-button usa-button-secondary" href="https://www.performance.gov/CAP/workforce/"> View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/FEVS-KPI-Data-dec.xlsx">Download Data</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8532" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction1() {
  document.getElementById("wrapper").innerHTML = codeBlock1
}

var codeBlock1 =   '<h3>Federal Employee Veiwpoint Survey - Strategic Hiring <em>(Updated December 2019)</em></h3>' + '<p>The Office of Personnel Management Federal Employee Viewpoint Survey measures employee perception of whether, and to what extent, conditions characteristic of successful organizations are present in their agencies.</p>' + '<p>The dashboard below compares 2017 and 2018 government-wide scores for two hiring-related metrics, tracking progress in hiring people with the right skills and overall satisfaction with agency hiring and recruiting. </p>'  + '<a class="usa-button usa-button-secondary" href="https://www.performance.gov/CAP/workforce/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/FEVS-KPI-Data-dec.xlsx">Download Data</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8533" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction2() {
  document.getElementById("wrapper").innerHTML = codeBlock2
}

var codeBlock2 =   '<h3>Cybersecurity - Manage Asset Security <em>(Updated December 2019)</em></h3>' + '<p>The dashboard below tracks FY2019 Q2-Q3 change for four asset security metrics for 23 federal agencies. Measuring progress in asset security area helps the Federal Government protect federal networks, software, and devices from unauthorized activity.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/it-mod/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cybersecurity_KPI Data_FY19-dec.xlsx">Download Data</a>' +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8526" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction3() {
  document.getElementById("wrapper").innerHTML = codeBlock3
}

var codeBlock3 =   '<h3>Cybersecurity - Limit Personnel Access <em>(Updated December 2019)</em></h3>' + '<p>The dashboard below tracks FY2019 Q2-Q3 change for three access-related metrics for 23 federal agencies. Measuring progress in limiting personnel access helps the Federal Government control which personnel have access to priveleged networks and high value assets.</p>' + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/it-mod/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cybersecurity_KPI Data_FY19-dec.xlsx">Download Data</a>'  +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8534" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction4() {
  document.getElementById("wrapper").innerHTML = codeBlock4
}

var codeBlock4 =   '<h3>Cybersecurity - Protect Networks and Data <em>(Updated December 2019)</em></h3>' + '<p>The dashboard below tracks FY2019 Q2-Q3 change for three data protection metrics for 23 federal agencies. Measuring progress in this area helps the Federal Government improve data encryption and protect federal data from unauthorized intrusion and exfultration.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/it-mod/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cybersecurity_KPI Data_FY19-dec.xlsx">Download Data</a>' +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8535" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction5() {
  document.getElementById("wrapper").innerHTML = codeBlock5
}

var codeBlock5 =   '<h3>Cloud Email Adoption <em>(Updated December 2019)</em></h3>' + '<p>The dashboard below shows percentage change of agency email inboxes serviced by cloud-based solutions from June 2019 - September 2019.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/it-mod/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cloud-Email-Adoption_KPI-Data_dec.xlsx">Download Data</a>' +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8539" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction6() {
  document.getElementById("wrapper").innerHTML = codeBlock6
}

var codeBlock6 =   '<h3>Government-wide View <em>(Updated June 2019)</em></h3>' + '<p></p>' + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/category-management/">View the CAP Goal</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8527" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';


function myFunction7() {
  document.getElementById("wrapper").innerHTML = codeBlock7
}

var codeBlock7 =   '<h3>Category View <em>(Updated June 2019)</em></h3>' + '<p></p>' + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/category-management/">View the CAP Goal</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8529" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction8() {
  document.getElementById("wrapper").innerHTML = codeBlock8
}

var codeBlock8 =   '<h3>Department View <em>(Updated June 2019)</em></h3>' + '<p></p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/category-management/">View the CAP Goal</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8530" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction9() {
  document.getElementById("wrapper").innerHTML = codeBlock9
}

var codeBlock9 =   '<h3>Agency Progress in Current Fiscal Year <em>(Updated June 2019)</em></h3>' + '<p>The dashboard below compares 2017 and 2018 data from 23 federal agecies towards Category Management targets.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/category-management/">View the CAP Goal</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8531" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction10() {
  document.getElementById("wrapper").innerHTML = codeBlock10
}

var codeBlock10 =   '<h3>Overview and Definitions <em>(Updated June 2019)</em></h3>' + '<p></p>' + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/category-management/">View the CAP Goal</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8528" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction11() {
  document.getElementById("wrapper").innerHTML = codeBlock11
}

var codeBlock11 =   '<h3>Customer Satisfaction Scores <em>(Updated September 2019)</em></h3>' + '<p>The dashboard below compares 2017 and 2018 customer satisfaction data from 23 federal agencies in four targeted mission support areas.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/sharing-quality-services/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Customer%20Satisfaction%20Survey_KPI%20Data_FY18Sept.xlsx">Download Data</a>' +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8536" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction12() {
  document.getElementById("wrapper").innerHTML = codeBlock12
}

var codeBlock12 =   '<h3>Cash Loss to the Government - FY 17-18 <em>(Updated September 2019)</em></h3>' + '<p>The dashboard below shows 2017 - 2018 change in cash loss to the government by program across 23 federal agecies.</p>' + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/getting-payments-right/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cash-Loss-to-the-Government_KPI-Data_FY19Q4.xlsx">Download Data</a>'  +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8538" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction13() {
  document.getElementById("wrapper").innerHTML = codeBlock13
}

var codeBlock13 =   '<h3>Cash Loss to the Government - Program Scorecards <em>(Updated December 2019)</em></h3>' + '<p>The government can achieve the greatest return on investment for the taxpayer by ensuring that improper payments are eliminated in the highest-risk programs, otherwise known as high-priority programs. Details about these programs can be found in the dashboard below as well as steps to improve their efficiency by focusing on reducing incorrect payment that result in monetary loss.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/getting-payments-right/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cash_Loss_Government_KPI_Data_Dec2019.xlsx">Download Data</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8537" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';
