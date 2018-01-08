node {
    stage('Checkout') {
        checkout scm
    }

    stage('Initialize') {
        sh 'npm install'
    }

    stage('Build') {
        sh 'npm run build'
    }
}
