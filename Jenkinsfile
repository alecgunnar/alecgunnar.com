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
}
