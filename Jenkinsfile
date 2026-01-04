pipeline {
  agent any

  environment {
    ALECGUNNAR_HOSTNAME = credentials('alecgunnar-hostname')
    ALECGUNNAR_CONTENT_PATH = credentials('alecgunnar-content-path')
  }

  stages {
    stage('Build') {
      steps {
        sh('./bin/build')
      }
    }

    stage('Verify Build') {
      steps {
        sh('ls -l')
      }
    }

    stage('Deploy') {
      steps {
        withCredentials([sshUserPrivateKey(credentialsId: 'alecgunnar-user-key', keyFileVariable: 'PK', usernameVariable: 'USERNAME')]) {
          sh 'scp -o StrictHostKeyChecking=no -i $PK -r build/* ${USERNAME}@${ALECGUNNAR_HOSTNAME}:${ALECGUNNAR_CONTENT_PATH}'
        }
      }
    }

    stage('Verify Deploy') {
      steps {
        sh('curl -v https://${ALECGUNNAR_HOSTNAME}')
      }
    }
  }
}
