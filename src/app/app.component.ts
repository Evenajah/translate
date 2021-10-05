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
      'h-notification': 'Notification',
      't-seeall': 'See all',
      't-noti-not-found': 'Notification not found!',
      't-make-difference-by-creating-widget':
        'Make the difference by creating your Widget',

      'al-delete-online-config': 'Delete Online Config',
      'al-once-you-delete-cant-do-it':
        "Once you delete config, you can't undo it !",
      'al-once-you-delete-group-do-it':
        "Once you delete group, you can't undo it !",
      'al-once-you-delete-thing-cant-do-it':
        "Once you delete thing, you can't undo it !",
      'al-once-you-leave-thing-cant-do-it':
        "Once you Leave thing, you can't undo it !",
      'al-once-you-delete-destination-cant-do-it':
        "Once you delete destination, you can't undo it !",
      afterDelete: 'After delete',
      youCantUndoPleaseConfirm:
        'you can not undo your action. Please confirm to delete.',
      'al-confirm-transfer-thing': 'Confirm transfer thing',
      'al-leave-thing': 'Leave Thing',
      'al-you-will-be-add-to-future':
        'You will be added to project in the future.',
      confirmTransfer: 'Confirm transfer',
      to: 'to',
      'al-please-confirm-transfer-thing-subtitle':
        'Please confirm to transfer your thing to other. After your confrimed, you can not access this thing.',
      'al-you-will-be-register-in-future':
        'You will be able to re-register this thing in the future. !',
      'al-from-your-account': 'from your account ?.',
      'al-from-project': 'from project ?',
      'al-from-dashboard': 'from Dashboard',
      'al-once-you-delete-sensor-cant-do-it':
        "Once you delete Sensor, you can't undo it !",
      'al-once-you-delete-share-link-cant-do-it':
        "Once you delete Share Link, you can't undo it !",
      'al-delete-compare-data': 'Delete Pin Compare Data',
      'al-message-cache-process': 'Message Cache On Process',
      'al-once-you': 'Once you',
      'al-you-can-only-delete-it-when-job-done':
        'You can only delete it when the job is done.',
      'al-project-you-can-do-this': "project, you can't undo it !",
      'al-the-number-project-reach-maximum-limit':
        'The number of project reach maximum limit.',
      'al-the-number-fav-project-reach-maximum-limit':
        'The number of favorite project reach maximum limit.',
      'al-unable-to-create-project-limit-exceed':
        'Unable to create project. Because the limit is exceeded.',
      'al-unable-to-mark-fav-project-limit-exceed':
        'Unable to mark favorite project. Because the limit is exceeded.',
      'al-all-widget-in-dashboard-will-be-leave':
        'All widget in this dashboard will also be Leave.',
      'al-all-widget-in-dashboard-will-be-delete':
        'All widget in this dashboard will also be deleted.',
      'al-confirm-revoke-email': 'Confirm to revoke email',
      'al-confirm-to-revoke': 'Confirm to revoke',
      'al-after-revoke': 'After revoke',
      'al-would-not-permission-to-use-project':
        'would not permission to use Project',
      'al-would-not-permission-to-use-dashboard':
        'would not permission to use Dashboard',
      'al-please-confirm-to-revoke': 'Please confirm to revoke.',
      'al-delete-link': 'Delete Link',
      'al-delete-all-share-link': 'Delete All Share Link',
      'al-after-delete-you-cant-undo-please-confirm':
        'After delete you can not undo your action. Please confirm to delete.',
      'al-from-Project': 'from Project',
      'al-before-like-this-please-unlike-some-project':
        'before you like this project Please unlike some projects that you have previously liked.',
      'al-your-like-are-limit-to-8-project':
        'Your likes are limited to 8 projects.',
      'b-tutorial': 'Tutorial',
      'al-my-workspace': 'My Workspace',
      'al-my-workspace-is?': 'My Workspace คืออะไร?',
      'al-my-workspace-description':
        '“My Workspace” พื้นที่สำหรับเริ่มต้น สร้างสรรค์งานของคุณมีไว้เพื่อให้คุณได้เข้าถึงโปรเจคต่างๆ รวมถึง Thing ได้อย่างง่ายดาย',
      'al-how-to-create-mix-dashboard': 'How to create a mix dashboard',
      'al-how-to-fav-dashboard': 'How to favorite dashboard',
      'al-include-with': 'ประกอบด้วย',
      'al-mix-dashboard': 'Mix Dashboard',
      'al-fav-dashboard-description':
        'เป็นพื้นที่สำหรับแสดงผลข้อมูลภาพรวมของโปรเจค ที่ใช้งานบ่อยๆและต้องการ Favorite เพื่อง่ายต่อการเข้าถึง',
      'al-mix-dashboard-description':
        'ฟีเจอร์สุดพิเศษที่คุณสามารถกำหนดได้เอง สำหรับการแสดงผลข้อมูลอุปกรณ์จากหลากหลายโปรเจคมาไว้ใน Dashboard เดียวกัน',
      'al-fav-project-description':
        'เป็นทางลัดเข้าสู่โปรเจค ที่เราได้ทำการ Favorite ไว้ สามารถแสดงผลสูงสุดได้ถึง 8 โปรเจค',
      'al-thing-description':
        'แสดง Thing ที่ถูกลงทะเบียนเข้ามาของคุณ แสดงผลสูงสุด 4 Thing และสามารถลงทะเบียน Thing ใหม่ได้ที่นี่',
      'al-click-register-tool': 'คลิกเพื่อลงทะเบียนอุปกรณ์',
      'al-see-all-things': 'See all things',

      'h-my-project': 'My Project',
      'al-my-project-is?': 'My Project คืออะไร?',
      'al-my-project-description':
        '“My Project” การแบ่งสัดส่วนเพื่อสร้างสรรค์ผลงาน ด้วยการสร้างโปรเจคและแชร์โปรเจคเพื่อให้ผู้อื่นเข้ามาพัฒนาร่วมกันได้',
      'al-how-to-create-dashboard': 'How to create dashboard',
      'al-how-to-create-widget': 'How to create widget',
      'al-how-to-share-dashboard': 'How to Share Dashboard',
      'al-how-to-share-project': 'How to Share Project',
      'al-dashboard-description':
        'Dashboard เป็นพื้นที่แสดงภาพรวมของข้อมูลและ widgets ในรูปแบบต่างๆ เพื่อให้เข้าใจได้ง่าย โดยคุณสามารถแชร์ Dashboard ให้ผู้อื่นเข้ามาดูข้อมูลหรือควบคุมอุปกรณ์ร่วมกับคุณ',
      'al-group-thing-description':
        'การจัดกลุ่มของ Thing ที่มีอยู่เพื่อง่ายต่อการจัดการ อุปกรณ์ของคุณ โดย 1 Thing สามารถอยู่ได้หลายกลุ่ม',

      'al-my-thing-is?': 'My Thing คืออะไร?',
      'al-my-thing-description':
        'หน้ารวมอุปกรณ์ IoT ของคุณ ซึ่งแต่ละอุปกรณ์จะมี Sensor เพื่อแสดงผลข้อมูลของอุปกรณ์นั้นๆ แบบ Real-time',
      'al-how-to-register-thing': 'How to register thing',
      'al-how-to-assign-thing-to-project': 'How to assign thing to project',
      'al-how-to-create-sensor': 'How to create sensor',
      'al-how-to-create-group': 'How to create group',
      'al-thing-cards': 'Thing Cards',
      'al-sensor-description':
        'แสดงค่าจากอุปกรณ์ประเภทต่างๆ เช่น อุณหภูมิ, ความชื้น เป็นต้น โดย 1 อุปกรณ์จะสามารถรับ Sensor ได้หลากหลายขึ้นอยู่กับอุปกรณ์นั้นๆ',
      'al-magellan-type-accept':
        'ประเภทของ Thing ที่ Magellan  รองรับการใช้งาน',
      'al-thing-type-sim': 'Thing ประเภทที่ใส่ซิมการ์ด(SIM)',
      'al-thing-sim-description':
        'อุปกรณ์ IoT ที่มีการเชื่อมต่อผ่าน AIS Cellular Network (มี AIS SIM)',
      'al-thing-type-non-sim': 'Thing ประเภทที่ไม่ใส่ซิมการ์ด(Non - Sim)',
      'al-thing-non-sim-description':
        'อุปกรณ์ IoT ที่มีการเชื่อมต่อผ่าน Network อื่นๆ เช่น WiFi( ไม่มี AIS SIM)',
      'al-thing-cards-such-as': 'Thing Cards แสดงข้อมูลต่างๆ ได้แก่',
      'al-show-package-of-thing': 'แสดง Package ของ Thing นั้นๆ',
      'al-expire-package': 'วันหมดอายุของ Package',
      'al-show-status-thing': 'แสดงสถานะของอุปกรณ์',
      'al-total-sensors-in-thing-cards': 'จำนวน Sensors ด้านใน Thing Cards',

      'al-online-config-is?': 'Online Config คืออะไร?',
      'al-online-config-description':
        '“Online Config” การตั้งค่าของอุปกรณ์ของคุณ โดยการกำหนดชื่อตัวแปร (Key) และค่าของข้อมูล (Value)  เพื่อสะดวกในการจัดการ เช่น  การปรับความถี่ในการส่งข้อมูลจากอุปกรณ์ขึ้นมาบน Magellan  โดย 1 อุปกรณ์สามารถมีข้อมูลการตั้งค่าได้เพียง 1 ชุดการตั้งค่าเท่านั้น',
      'al-how-to-create-online-config': 'How to create online config',

      'al-compare-data-is?': 'Compare Data คืออะไร?',
      'al-compare-data-description':
        'การเปรียบเทียบข้อมูล Sensors ของอุปกรณ์ต่างๆ เพื่อให้เห็นความแตกต่างของข้อมูลโดยแสดงผลลัพธ์ในรูปแบบของกราฟเส้น และยังสามารถบันทึกการเปรียบเทียบข้อมูลที่คุณใช้งานเป็นประจำเพื่อความสะดวกในการเปรียบเทียบในครั้งถัดไปได้',
      'al-how-to-compare-thing-data': 'How to compare thing data',
      'al-how-to-view-thing-data': 'How to view thing data',

      'al-share-data-is?': 'Share Data คืออะไร?',
      'al-share-data-description':
        'การส่งต่อข้อมูลออกจาก Magellan เพื่อทำการแชร์ข้อมูลให้กับผู้อื่น',
      'al-how-to-share-data-by-create-link': 'How to share data by create link',
      'al-how-to-share-data-to-destination': 'How to share data to destination',
      'al-how-to-manage-message-cache': 'How to manage message cache',
      'al-share-data-by-create-link': 'Share Data by Create Link คืออะไร ?',
      'al-share-data-by-create-link-description':
        'การเอาข้อมูลจาก Magellan ไปใช้งานภายนอกแบบ Pull Mode โดยสร้างเป็น API Link เพื่อดึงข้อมูล Sensor ต่างๆ ของอุปกรณ์ไปใช้',
      'al-share-data-to-destination-is?': 'Share Data to Destination คืออะไร ?',
      'al-share-data-to-destination-description':
        'การส่งออกข้อมูลจาก Magellan แบบ Push Mode โดยกำหนด URL ปลายทาง เพื่อให้ Magellan ส่งข้อมูลไปยัง Server ของคุณ',

      't-welcome-to-new-world':
        'welcome to the new world. Let’s have new experiences',
      't-no-result-found': 'No Result Found',
      'al-my-package': 'My Package',
      'al-my-package-is?': 'My Package คืออะไร?',
      'al-my-package-description':
        'หน้าจัดการ Package ของคุณซื้อแพคเกจผ่าน AIS Playground จากนั้นนำมาเชื่อมต่อกับ Thing เพื่อเริ่มต้นเปิดการใช้งาน',
      't-fluid': 'FLUID',
      't-fixed': 'FIXED',
      't-add-magellan-to-homescreen': 'Add Magellan to home screen',
      'v-invalid-url': 'Invalid URL , Please correct the Url',
      't-the-image-shown-by-carousel': 'The images would be shown by carousel',
      'b-update': 'update',
      display: 'Display',
      't-things-for': 'Things for',
      'h-power-to-create-data-visualization':
        'Power to create Data Visualization',
      't-the-way-to-make-personalized-in-your-style':
        'The way to make your project personalized in your style.',
      't-add-magellan-to-homescreen-description':
        "To install this web app on your device tap the Menu button and then 'Add to Home screen' button",
    },
  ];
  name = 'Angular ' + VERSION.major;
}
