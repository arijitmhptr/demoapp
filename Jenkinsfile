pipeline {

    agent any

    tools {nodejs "node"}

    stages {

        stage('Git') {
                git 'https://github.com/arijitmhptr/demoapp'
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