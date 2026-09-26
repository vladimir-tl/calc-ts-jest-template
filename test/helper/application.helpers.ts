import { Application } from '../../src/class/application/application'

export function createLowRiskApplication(): Application {
  return new Application(5000)
}

export function createMediumRiskApplication(): Application {
  return new Application(15000)
}

export function createHighRiskApplication(): Application {
  return new Application(60000)
}
