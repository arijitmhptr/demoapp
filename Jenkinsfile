pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the app'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Building the app'
                sh './script/test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the app'
                sh './script/deploy'
            }
        }
    }
}