pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh('./bin/build')
      }
    }

    stage('Deploy') {
      steps {
        sh('ls ./build')
      }
    }
  }
}
