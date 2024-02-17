export declare abstract class IMailService {
    abstract sendOTP(payload: SendOTPPayload): Promise<any>;
}
