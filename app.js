// write code here

ข้อที่1 { name: 'Pepsi', price: 19, size: '500mL' }
ข้อที่2 { name: 'Pepsi', price: 19, size: '500mL' }
ข้อที่3 true

เนื่องจากเราเปลี่ยนค่าใน product2 ซึ่งอ้างอิงถึง object เดียวกับ product1 ดังนั้นการเปลี่ยนค่าใน product2 จะส่งผลกระทบต่อ product1 ด้วย
ข้อที่3จะแสดงผลลัพธ์เป็น true เพราะว่า product1 และ product2 มี reference เดียวกันไปยัง object เดียวกันในหน่วยความจำ
