# QR Code Scanner - React PWA

This is a React application that serves as a QR code scanner. It is built as a Progressive Web App (PWA) using React and leverages the device's camera to scan QR codes.

## Features

- QR code scanning using the device's camera
- Real-time decoding and display of QR code content
- Responsive design for seamless usage on different devices
- Works offline and can be installed as a standalone app on supported devices

## Demo

You can access the live demo of this app [here](https://stellar-wisp-f842f7.netlify.app/).

## Installation

To install and run this application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/louise-decombe/qr-code-pwa
```

2. install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Open your web browser and visit http://localhost:3000 to access the app.

## Usage

- Grant the required camera access permission when prompted by the app.
- Point your device's camera at a QR code.
- The app will automatically scan the QR code and display its content.
- You can scan multiple QR codes consecutively.

## Deployment
This app is deployed using Netlify. It is configured to automatically deploy whenever changes are pushed to the main branch of the associated GitHub repository.

## Technologies Used

- React
- React Router
- QR Code Reader Library (e.g., react-qr-reader)
- Service Worker (for PWA functionality)
- CSS 
## License

This project is licensed under the MIT License.

## Acknowledgements

The QR code scanning functionality in this app is based on the react-qr-reader library.
Special thanks to the developers and contributors of the various open-source libraries used in this project.
Contact

For any inquiries or suggestions, feel free to reach out to contact@louise.tech
