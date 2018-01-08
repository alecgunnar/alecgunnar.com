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

    stage('Deploy') {
        withCredentials([string(credentialsId: 'ALECGUNNAR_DEPLOY_USER', variable: 'USER')]) {
            sh 'rsync -r --delete dist/ $USER@107.170.0.205:/var/www/public_html/alecgunnar.com'
        }
    }
}
