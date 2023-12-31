var questionsData = questions();

// Exporte a função questions
function questions() {
  var questionsData = [
    {
      "question": "Global Shipping does business in a number of different countries but wants to report in a single currency. The Salesforce Administrator is considering enabling multi-currency. What additional steps must be taken after multi-currency is enabled?",
      "type": "checkbox",
      "options": [
        "A. Set the corporate currency",
        "B. Set the validity dates for the exchange rates",
        "C. Define the list of currencies and make them active",
        "D. Set the exchange rates for the currencies",
        "E. Set the currency for each profile"
      ],
      "correctAnswer": [0, 2, 3],
      "justification": "Exchange rates are not dated by default when multi-currency is enabled. The Advanced Currency Management feature must be selected if the company needs to track dated exchange rates. As a requirement for dated exchange rates was not specified, Advanced Currency Management is an optional step. Setting a currency for each profile is also not necessary.",
      "referenceLinks": [
        "https://help.salesforce.com/articleView?id=sf.admin_currency.htm&type=5",
        "https://help.salesforce.com/articleView?id=sf.editing_conversion_rates.htm&type=5"
      ],
      "screenshots": [
        "https://cdn.focusonforce.com/wp-content/uploads/2017/10/admin-org-setup-question-12.png"
      ],
      "videos": []
    },
    {
      "question": "Cosmic Software Solutions uses Salesforce for lead management. The record page created for leads consists of several custom fields and sections. They need to be configured as individual components such that different types of users only see the fields and sections that they require. For example, a section consisting of five custom fields, which allow specifying contact information, should only be visible to sales users. Which feature should be used to meet this requirement?",
      "type": "radio",
      "options": [
        "A. Dynamic Forms",
        "B. Dynamic Interactions",
        "C. Page Layouts",
        "D. Lightning Web Component"
      ],
      "correctAnswer": 0,
      "justification": 
        '<p>' +
            '<span class="quiz-answer">' +
                '<em>' + 
                    'Dynamic Forms allow migrating the fields and sections from an existing record page as individual components in the Lightning App Builder. These components can then be configured the same way as the other components on the page so that users can view only the fields and sections they should be able to access. Dynamic Forms is supported for custom objects, accounts (including person accounts), cases, contacts, leads, and opportunities.\n' +
                '</em>' +
            '</span>' +
        '</p>\n' +
        '<p>' + 
            '<em>' +
                'Dynamic Interactions is a feature used when an event occurring in one component on a Lightning page, such as the user clicking an item in a list view, should update other components on the page. Creating a custom Lightning Web Component for this requirement is unnecessary and would require programmatic development. Page Layouts do not support configuring visibility for specific fields and sections on a page.' +
            '</em>'+ 
        '</p>\n' +
        '<p>' + 
            '<strong>Objective:</strong>Configuration and Setup<br>' + 
            '<strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface' + 
		'</p>',
      "referenceLinks": [
        "https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm&type=5"
      ],
      "screenshots": [],
      "videos": []
    },
    {
      "question": "A Salesforce user has approached the Administrator informing him that she wants to hide certain tabs in the navigation bar. What should the Salesforce Administrator suggest to her?",
      "type": "radio",
      "options": [
        "A. The administrator should remove access to the tab at the user level.",
        "B. The user should create a new profile or App",
        "C. The user should enable the 'auto-hide' feature for rarely used tabs.",
        "D. The user should customize the navigation bar of the app."
      ],
      "correctAnswer": 3,
      "justification": '<span class="quiz-answer"><em>A Salesforce Administrator could modify the access to a tab for a profile but not for an individual user. There is no auto-hide feature for rarely used tabs. Each app can have a different set of tabs. Users can be assigned to different apps. In Lightning Experience, the App Launcher can be utilized to switch between apps.</em></span> <p><em>Users can add, remove, rename, and reorder tabs that are displayed by default by personalizing the navigation bar of an app in Lightning Experience. Default tabs that are specified by the Salesforce Administrator cannot be removed or renamed. Users cannot create profiles or Apps only the Administrator can do this also, it is not the required solution for this scenario.</em> </p> <p><strong>Objective:</strong> Configuration and Setup<br><strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface </p>',
      "referenceLinks": [
        "https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm&type=5","https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm&type=5"
      ],
      "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/2020/01/edit-app-items.png","https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-156-image1.png"],
      "videos": []
    }
  ];

  return questionsData;
}
