pipeline {
    env {
        DEPLOY_CREDS = credentials('gunnar-server-deploy-creds')
        DEPLOY_SERVER = credentials('gunnar-server-address')
        DEPLOY_PATH = credentials('alecgunnar-site-location')
    }

    stage('Checkout') {
        checkout scm
    }

    stage('Initialize') {
        sh 'yarn install'
    }

    stage('Build') {
        sh 'yarn build'
    }

    stage('Deploy') {
        def remote = [:]
        remote.name = "gunnar-server"
        remote.host = DEPLOY_SERVER
        remote.user = DEPLOY_CREDS_USR
        remote.password = DEPLOY_CREDS_PSW
        remote.allowAnyHosts = true

        sshPut remote: remote, from: 'dist', into: DEPLOY_PATH
    }
}
