pipeline {
    agent any

    env {
        DEPLOY_CREDS = credentials('gunnar-server-deploy-creds')
        DEPLOY_SERVER = credentials('gunnar-server-address')
        DEPLOY_PATH = credentials('alecgunnar-site-location')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Initialize') {
            steps {
                sh 'yarn install'
            }
        }

        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }

        stage('Deploy') {
            steps {
                def remote = [:]
                remote.name = "gunnar-server"
                remote.host = DEPLOY_SERVER
                remote.user = DEPLOY_CREDS_USR
                remote.password = DEPLOY_CREDS_PSW
                remote.allowAnyHosts = true

                sshPut remote: remote, from: 'dist', into: DEPLOY_PATH
            }
        }
    }
}
