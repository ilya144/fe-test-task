import { IAction } from "../store/types";

interface IPayloadCreators {
  request(...args: any[]): any;
  success(...args: any[]): any;
  failure?(errorMsg: string): any;
}

export interface IActionCreator {
  types: {
    request: string;
    fetching: string;
    success: string;
    failure: string;
  };
  request(...args: any[]): IAction;
  fetching(): IAction;
  success(...args: any[]): IAction;
  failure(errorMsg: string): IAction;
}

const defaultPayload = (args: any) => args;

export default function createAction(
  type: string,
  payloadCreators: IPayloadCreators
): IActionCreator {
  const fetchingType = `${type}_REQUEST`;
  const successType = `${type}_SUCCESS`;
  const failureType = `${type}_FAILURE`;

  return {
    types: {
      request: type,
      fetching: fetchingType,
      success: successType,
      failure: failureType,
    },
    request(...args) {
      return {
        type: type,
        payload: payloadCreators.request
          ? payloadCreators.request(...args)
          : defaultPayload(args),
        action: this,
        variant: "request",
      };
    },
    fetching(...args) {
      return {
        type: fetchingType,
        action: this,
        variant: "fetching",
      };
    },
    success(...args) {
      return {
        type: successType,
        payload: payloadCreators.success
          ? payloadCreators.success(...args)
          : defaultPayload(args),
        action: this,
        variant: "success",
      };
    },
    failure(errorMsg: string) {
      if (payloadCreators.failure) {
        return {
          type: failureType,
          payload: payloadCreators.failure(errorMsg),
          action: this,
          variant: "failure",
        };
      }
      return {
        type: failureType,
        payload: { error: errorMsg },
        action: this,
        variant: "failure",
      };
    },
  };
}
