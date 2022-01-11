import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  objectKeys = Object.keys;
  translateObject = [
    {
      'al-the-number-dashboard-reach-maximum-limit':
        'The number of favorite dashboard reach maximum limit.',
      'al-unable-to-favorite-dashboard-limit-exceed':
        'Unable to mark favorite dashboard. Because the limit is exceeded.',

      't-tutorial-thing':
        'อุปกรณ์ IoT ของคุณที่ซื้อหรือมีการลงทะเบียน เพื่อใช้งาน Magellan โดย 1 Thing สามารถมี Sensor ได้หลายประเภท',
      't-tutorial-thing-2':
        'เงื่อนไขการใช้งานอุปกรณ์ขึ้นอยู่กับ Package ที่ได้มีการสมัครใช้บริการ',
      't-tutorial-thing-3':
        'ศึกษารายละเอียดและเงื่อนไขเพิ่มเติมเกี่ยวกับ Package ได้ที่ นี่ คลิกเพื่อดูรายละเอียด Package',
      'h-text-action-setting': 'Text Action Setting',
      'al-reload-message': 'Reload Message',
      'bc-create-online-config': 'Create Online Config',
      't-create-link-detail': 'Create link Detail',
      't-share-link-detail': 'Share LINK Detail',
      't-link-detail': 'Link Detail',
      't-update-link': 'Update Link',
      't-all-share-dashboard': 'All Shared Dashboard',
      't-project-detail': 'Project Detail',
      't-please-connect-internet': 'Please connect internet',

      'h-start-using-magellan': 'Start using MAGELLAN',
      'h-thing-resource-management': 'Things and Resources Management',
      'h-things-data-management': 'Things Data Management',
      'h-acuiring-api-access': 'Acquiring APIs access',
      'h-magellan-visualization': 'Magellan Visualization',
      't-create-dashboard-option-1':
        'Go to menu bar, Select menu "ALL PROJECT"',
      't-create-dashboard-option-2':
        'Select menu "MY PROJECTS" and select Project',
      't-create-dashboard-option-3': 'Click "CREATE DASHBOARD"',
      't-create-dashboard-option-4': 'Input Dashboard Name, click "SAVE"',
      't-create-widget-option-3':
        'Select menu "DASHBOARD" and select Dashboard',
      't-create-widget-option-4': 'Click "ADD WIDGET"',
      't-create-widget-option-5': 'Click "CREATE SENSOR WIDGET"',
      't-create-widget-option-6': 'Select Thing, click "NEXT"',
      't-create-widget-option-7': 'Select Sensor',
      't-create-widget-option-8':
        'Select Widget type (GRAPH, MAP, ACTION, ICON), click "NEXT"',
      't-create-widget-option-9': 'Adjust your Widget detail',
      't-create-widget-option-10': 'Click "CREATE"',
      't-select-dashboard': 'Select Dashboard',
      't-share-dashboard-option-4': 'Click Share Icon at Dashboard',
      't-share-dashboard-option-5': 'Input Invite email, click "INVITE"',
      't-share-dashboard-option-6':
        'Click "COPY LINK" for share Dashboard by link',
      'h-how-to-install-sdk': 'How to install SDK',
      't-install-sdk-option-1': 'Go to menu bar, select menu "EXPLORE"',
      't-install-sdk-option-2': 'Click "SDK Document"',
      't-install-sdk-option-3': 'You will see how to install SDK',
      'h-how-to-view-thing-data-history': 'How to view Thing Data History',
      't-select-menu-thing': 'Select menu "THING"',
      't-select-menu-data-history': 'Select menu "DATA HISTORY"',
      't-select-sensor-duration-time':
        'Select Sensor and duration time that you want to view data.',
      't-click-view-data': 'Click "VIEW DATA"',
      't-you-can-view-data-history-in-graph':
        'You can view data history in type Graph, Table and Map',
      'h-how-to-create-destination': 'How to create Destination',
      'h-how-to-manage-message-cache':
        'How to manage Message Cache from Destination',
      'h-how-share-data-by-create-link': 'How to share data by Create Link',

      't-select-compare-data': 'Go to menu bar, select menu "COMPARE DATA"',
      't-click-create-new-compare': 'Click "CREATE NEW COMPARE"',
      't-select-duration-time-compare':
        'Select duration time that you want to compare data and click "COMPARE"',
      't-you-can-pin-compare':
        'You can pin your comparison by select "Pin Compare"',
      't-set-pin-compare-then-click':
        'Set Pin Compare Name and then click "OK"',

      't-go-to-menubar-share-data-set-destination':
        'Go to menu bar, select menu "SHARE DATA" and select submenu "SET DESTINATION"',
      't-click-create-destination': 'Click "CREATE FIRST DESTINATION"',
      't-input-destination-information':
        'Input Destination Information (Destination Name), click "ADD THING"',
      't-select-thing-click-save': 'Select Thing, click "SAVE"',
      't-fill-create-destination': 'Fill in the form create Destination',

      't-destination-status-description':
        'Setting to enable or disable data transmission to the destination server',
      't-message-cache-description':
        'Setting to enable or disable the storage of data that cannot be sent to the destination server.',
      't-event-destination':
        'The type of data from the device to be sent to the destination server include',
      't-report-destination': 'Sensor data from the device',
      't-desire-destination': 'Device control information',
      't-cennection-description':
        'Device status information such as Connected or Disconnected',
      't-authentication-description':
        'Authentication of the destination server include NONE, Basic Authen and oAuth2',
      't-thing-information-description':
        'Device information to be exported to the destination server.',
      't-destination-mode-description':
        'Transmission format data to destination server can be sent in 3 formats include',
      't-all-description': 'Send sensor data as sent by the device.',
      't-raw-description': 'Send all sensor data of the device.',
      't-custom-description': 'Select the sensor to send data.',
      't-custom-header-description':
        'Additional "Headers" that want to send data to the destination server.',
      't-click-save': 'Click "SAVE"',
      't-raw': 'Raw',
      't-view-destination-list': 'View Destination List',
      't-select-number-queue=destination-box':
        'Select Number of Queue Message in Destination Box',
      't-page-show-detail-message-cache':
        'Page Message Cache shows details of a message that was sent to a destination in status pending. You can click "RELOAD" to reload the sending message again.',

      't-select-create-link':
        'Go to menu bar, select menu "SHARE DATA" and select submenu "CREATE LINK"',
      't-click-create-first-link': 'Click "CREATE FIRST LINK"',
      't-input-share-data-detail':
        'Input Share Data Details (Link Name, Set Expiry Date), click "SAVE"',

      'h-how-to-start-magellan': 'How to start Using Magellan',
      't-click-register-button':
        'Click "REGISTER" button on Magellan Homepage.',
      't-click-register-button-playground':
        'Click "Register" button on the page Login Playground Account.',
      't-fill-form-register-playground':
        'Fill in the forms and click “Done” button to create your Playground Account.',
      't-after-register-playground':
        'After registering, waiting for verification email to be sent to your email.',
      't-click-link-email-playground':
        'Click the link in the AIS Playground email you received.',
      't-now-can-login-playground':
        'Now you can login with your AIS Playground account to use Magellan.',
      't-alternative-login-option':
        'Alternative options for login by Google and Facebook',
      't-alternative-login-option.1':
        'After logging in with your AIS Playground account, you can connect your social media accounts with Google or Facebook. Go to the page "USER INFORMATIONS".',
      't-alternative-login-option.2':
        'Click "CONNECT" button to connect your Social Media account.',
      't-alternative-login-option.3':
        'After connecting your social media account, you can log in with Google or Facebook next time.',

      'h-how-to-register-device-to-magellan':
        'How to register your device to Magellan',
      't-select-my-things': 'Go to menu bar, Select menu "MY THINGS"',
      't-click-register-things': 'Click "REGISTER THING" button.',
      't-fill-form-create-things':
        'Select Type (Sim,Non-Sim), Fill in the form (ICCID,IMEI,IMSI,Thing Name) and Click "SAVE" button to register Thing to account',
      't-alternative-register-thing': 'Alternative options to register Thing',
      't-alternative-register-thing.1':
        'Register Thing by upload template file CSV ',
      't-alternative-register-thing.1.1': 'click "DOWNLOAD"',
      't-alternative-register-thing.1.2':
        'Input data in file template that receive from file download',
      't-alternative-register-thing.1.3': 'Click "UPLOAD.CSV" button',
      't-alternative-register-thing.1.4': 'Select file template, click "OPEN"',

      't-alternative-register-thing.2': 'Register Thing by scan QR code',
      't-alternative-register-thing.2.1':
        'Click "BROWSER QR CODE" or Click "SCAN QR CODE"',
      't-alternative-register-thing.2.2':
        'Click "BROWSER QR CODE", select QR Code image',
      't-alternative-register-thing.2.3':
        'Click "SCAN QR CODE", scanning from camera',

      'h-how-to-create-project': 'How to create Project',
      't-click-create-new-project': 'Click "CREATE NEW PROJECT" button',
      't-input-project-info':
        'Input Project Information (Project Name). You can select or customize the color for your project (Project Color). Click the "CREATE" button.',

      't-select-myproject': 'Select "MY PROJECTS"',
      't-click-share-project': 'On Project cards, Click "Share Project"',
      't-input-invite-email': 'Input Invite email, Click "INVITE" button',
      't-view-project-member-list': 'View Project Member list',

      't-click-add-project-in-thing-cards':
        'Click "ADD TO PROJECT" in Thing Cards',
      't-select-project-and-save': 'Select Project and click "SAVE" button',
      't-your-thing-already-in-project': 'Your Thing already in your Project ',

      't-select-thing': 'Select menu "THING"',
      't-select-thing-in-project': 'Select Thing in your project',
      't-click-add-sensor': 'Click "ADD SENSOR"',
      't-inputsensor-information':
        'Input Sensor Information (Sensor Name, Value, Sensor Type "Control" or "Report", Data type input "String" or "Number") and click "ADD" button.',

      't-select-group-thing': 'Select menu "GROUP THING"',
      't-click-create-group-thing': 'Click "CREATE GROUP THING"',
      't-input-group-thing-information':
        'Input Group Thing Information (Group Thing Name, Group Thing Description) and click "ADD THING"',
      't-select-thing-and-save': 'Select Things and click "SAVE"',
      't-after-success-select-thing':
        'After successfully selecting the thing, click "SAVE"',

      't-select-online-config': 'Go to menu bar, Select menu "ONLINE CONFIG"',
      't-click-create-new-config': 'Click "CREATE NEW CONFIG"',
      't-input-config': 'Input Config Name. Click "ADD THING"',
      't-click-add-field-then-save':
        'Click "ADD FIELD", input Key and Value then click "SAVE"',

      'h-share-project': 'Share Project',
      'h-how-to-create-online-config': 'How to create config (Online Config)',
      'h-delete-all-link': 'delete all link',
      'h-create-link': 'Created Link',

      'h-introduction': 'Introduction',
      'h-thing-message-format': 'THING MESSAGE FORMAT',
      'h-coaps-status-codes': 'CoAP STATUS CODES',
      'h-config': 'CONFIG',
      'h-delta': 'DELTA',
      'h-http-status-codes': 'HTTP STATUS CODES',
      'h-mqtt-connect': 'MQTT CONNECT',
      'h-report-thing-real-time': 'Report Thing Real-Time',
      'h-report-thing-timestamp': 'Report Thing with Timestamp',
      'h-heartbeat': 'Heartbeat',
      'h-server-config': 'Server Config',
      'h-client-config': 'Client Config',
      'h-server-date-time': "Server's Date Time",
      'h-hdc1080-library': 'HDC1080 Library',
    },
  ];
  name = 'Angular ' + VERSION.major;
}
