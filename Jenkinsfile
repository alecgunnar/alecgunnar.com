node {
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
        withCredentials([
            string(credentialsId: 'gunnar-server-address', variable: 'serverAddress'),
            usernamePassword(credentialsId: 'gunnar-server-deploy-creds', usernameVariable: 'username', passwordVariable: 'password')
        ]) {
            def remote = [:]
            remote.name = "gunnar-server"
            remote.host = serverAddress
            remote.user = username
            remote.password = password
            remote.allowAnyHosts = true

            sshPut remote: remote, from: 'dist/.', into: 'preview.aleccarpenter.com'
        }
    }
}
