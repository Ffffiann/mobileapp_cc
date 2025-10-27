pipeline {
    agent any

    environment {
        IMAGE_NAME = "mobile-calculator"
        CONTAINER_NAME = "calcapp"
        PORT = "3000"
    }

    stages {
        stage('Checkout') {
            steps {
                // Ambil code dari git repository
                git 'https://github.com/username/mobile-calculator.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    // Hapus container lama kalau ada
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                    // Jalankan container baru
                    sh "docker run -d -p ${PORT}:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }
    }

    post {
        success {
            echo "Build & Deploy Sukses! Akses di http://<jenkins-server-ip>:${PORT}"
        }
        failure {
            echo "Build Gagal!"
        }
    }
}
