import { Application } from '../application/application'
import { RiskClass } from './risk-class'

export class RiskCalculator {
  calculate(application: Application): RiskClass {
    if (application.balance < 0) {
      return RiskClass.HIGH
    }

    if (application.balance <= 10000) {
      return RiskClass.LOW
    }

    if (application.balance <= 25000) {
      return RiskClass.MEDIUM
    }

    return RiskClass.HIGH
  }
}
