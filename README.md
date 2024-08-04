Here’s an updated version of your `README.md` that includes a description of the app, instructions for running it with Docker Compose, and other relevant details:

---

# Retirement Calculator

**Retirement Calculator** is a Progressive Web App (PWA) designed to help users calculate their retirement savings based on various input parameters. The app provides an intuitive interface for users to input their total savings, years until retirement, and expected annual return rate to compute the projected retirement savings.

## Features

- User-friendly interface for retirement calculations
- PWA support for offline use and installation on mobile devices
- Responsive design for desktop and mobile views

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Running the Application with Docker Compose

**Production**

To run the application in a production environment using Docker Compose, use the following command:

```sh
docker compose -f docker-compose.yml -p calculator up --build -d
```

This command will build the Docker image and start the application in detached mode.

## File Structure

- `public/` - Contains static assets like HTML, CSS, JavaScript, and icons.
- `src/` - Contains server-side code and locales.
- `docker-compose.yml` - Docker Compose configuration file for defining and running multi-container Docker applications.
- `Dockerfile` - Dockerfile for building the application image.

## Service Worker

The application includes a service worker for offline functionality and PWA support. The service worker is located in the `public/` directory and is registered in the `script.js` file.

### Service Worker Cache Management

The service worker caches essential assets for offline use. To ensure users receive the latest version of the app, the cache name is updated with each release:

- **Cache Name**: `pwa-cache-vX` (where `X` is the version number)
- **Cache Strategy**: Assets are cached during the `install` event and cleared during the `activate` event if they are no longer needed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute to the project.

---

Feel free to adjust or add any other information specific to your project as needed.