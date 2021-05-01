pipeline {

    agent any

    tools {nodejs "node"}

    stages {

        stage('Git') {
            steps {
                echo 'Clone the code'
                git clone 'https://github.com/arijitmhptr/demoapp.git'
            }
        }

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