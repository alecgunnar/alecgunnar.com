node {
    stage('Checkout') {
        checkout scm
    }

    stage('Initialize') {
        sh 'npm install'
    }

    stage('Build') {
        sh 'sed -i "s/DEVELOPMENT/$BUILD_NUMBER/g" src/version.js'
        sh 'npm run build'
    }
}
