## ขั้นตอนติดตั้งโปรแกรม
ติดตั้ง Wsl
เปิด Windows PowerShell โดย Run as administrator
พิมพคำสั่ง
```console
wsl --install
```
หลังจากนั้นติดตั้ง Ubuntu 20.04 LTS 

กำหนดชื่อผู้ใช้และรหัสผ่าน
กลังจากนั้นพิมพ์คำสั่ง

```bash
sudo apt update

sudo apt upgrade

y
```
ดาวน์โหลดและติดตั้ง Node.JS
เปิดcmd ตรวจสอบการติดตั้งโดยใช้คำสั่ง
```bash
node -v
```
## ขั้นตอนการสร้างโปรเจ็ค
เปิดcmd กำหนดที่อยู่และสร้างโฟล์เดอร์โดยใช้คำสั่ง
```bash
cd document
mkdir TestProject
cd TestProject
mkdir testD
cd testd
mkdir ninjafood
cd ninjafood
code .
```
เปิดTerminal
พิมพ์คำสั่ง 
```bash
npm init -y
```
ติดตั้งtailwindCSS
พิมพ์คำสั่ง 
```bash
npm install tailwindcss
```
สร้างโฟล์เดอร์ public และ src
สร้างไฟล์Styles.css ไว้ในsrc
import tailwindcss โดยเพิ่มโค้ด ไว้ใน ไฟล์Styles.css
```javascript 
@tailwind base;
@tailwind components;
@tailwind utilities;
```
แก้ไขโค้ดในไฟล์ package.json
```javascript 
"test" : "echo \"Error: no test spceified\" && exit 1"
```
เป็น
```javascript 
"build-css" : tailwindcss build src/styles.css -o public/styles.css
``` 
พิมพ์คำสั่งใน Terminal
```bash
npm run build-css
```
