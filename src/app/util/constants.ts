import {environment} from '../../environments/environment';
import {SelectItem} from 'primeng/api';

export class API {

  public static AUTH = {
    login: `${environment.baseUrl}/login`,
    signUp: `${environment.baseUrl}/signup`,
    refreshToken: `${environment.baseUrl}/refresh`,
    logout: `${environment.baseUrl}/logout`,
    guestAuthentication: `${environment.baseUrl}/authenticate/guest`,
    confirmEmail: `${environment.baseUrl}/api/0.1/authentication/confirm-email`
  };

  public static BUSINESS_API = {
    base: `${environment.baseUrl}/api/0.1/businesses`,
    byId: (id) => `${environment.baseUrl}/api/0.1/businesses/${id}`,
    image: (id) => `${environment.baseUrl}/api/0.1/businesses/${id}/image`,
    lastActiveUsers: (id) => `${environment.baseUrl}/api/0.1/businesses/${id}/last-users`,
    businessServices: `${environment.baseUrl}/api/0.1/services`,
    userBusinessBase: `${environment.baseUrl}/api/0.1/users-businesses`,
    updateUserBusinessRole: `${environment.baseUrl}/api/0.1/users-businesses/role`,
    userBusinessByRole: `${environment.baseUrl}/api/0.1/users-businesses/with-role`,
    getAllUsersOfBusiness: `${environment.baseUrl}/api/0.1/users-businesses/users`,
    getUserBusiness: `${environment.baseUrl}/api/0.1/users-businesses/business-relation`,

    businessUserBase: `${environment.baseUrl}/api/0.1/business-users`,
    businessUserById: (id) => `${environment.baseUrl}/api/0.1/business-users/${id}`,

    businessesForAdmin: `${environment.baseUrl}/api/0.1/admin/businesses`,

    stripeConnectLink: `${environment.baseUrl}/api/0.1/businesses/stripe-account-integration/connect-link`,
    stripeConnect: (id) => `${environment.baseUrl}/api/0.1/businesses/${id}/stripe-account-integration/connect`,
    stripeDisconnect: (id) => `${environment.baseUrl}/api/0.1/businesses/${id}/stripe-account-integration/disconnect`,
    stripeIntegration: (id) => `${environment.baseUrl}/api/0.1/businesses/${id}/stripe-account-integration`,

    cancellationPolicy: `${environment.baseUrl}/api/0.1/businesses/cancellation-policy`,
    deleteCancellationPolicies: (businessId) => `${environment.baseUrl}/api/0.1/businesses/cancellation-policy/${businessId}`,
    updateCancellationPolicy: (id) => `${environment.baseUrl}/api/0.1/businesses/cancellation-policy/${id}`,
    getAllCancellationPolicyForBusiness: `${environment.baseUrl}/api/0.1/businesses/cancellation-policy/for-business`,

    commonQuery:`${environment.baseUrl}/api/0.1/common-query`,
    offerServicesByBusiness:`${environment.baseUrl}/api/0.1/common-query/offered-services`,

    currencyBase:`${environment.baseUrl}/api/0.1/currency/`,
    currencyById:(businessId) => `${environment.baseUrl}/api/0.1/currency/${businessId}`,

    emailServerConfigurationBase: `${environment.baseUrl}/api/0.1/smtp-config`,
    emailServerConfigurationById: (id) => `${environment.baseUrl}/api/0.1/smtp-config/${id}`,

    businessCommunicationBase: `${environment.baseUrl}/api/0.1/business-communication`,
    businessCommunicationByBusinessId: (id) => `${environment.baseUrl}/api/0.1/business-communication/${id}`
  };

  public static OFFER_API = {
    offerNotify: `${environment.baseUrl}/api/0.1/notification/offers`,
    offerFrequency: `${environment.baseUrl}/api/0.1/offers/frequency`,
    getOfferByOfferToken: (offerToken) => `${environment.baseUrl}/api/0.1/offers/offer-token/${offerToken}`,
    getOfferConfigurationById: (offerConfigurationId) => `${environment.baseUrl}/api/0.1/offers/offer-configuration/${offerConfigurationId}`,
    usersForOffer: `${environment.baseUrl}/api/0.1/offers/users`,
    forBusiness: `${environment.baseUrl}/api/0.1/offers/for-business`
  };

  public static INTENT_API = {
    getAllIntent: `${environment.baseUrl}/nlp/intent/all`,
    base: `${environment.baseUrl}/nlp/intent/`,
    updateIntentPhrase: `${environment.baseUrl}/nlp/intent/add-phrase`,
    allPrases: `${environment.baseUrl}/nlp/intent/all-phrases`
  };

  public static BUSINESS_SERVICE_WORKPERIOD = {
    base: `${environment.baseUrl}/api/0.1/work-periods`,
    byId: (id) => `${environment.baseUrl}/api/0.1/work-periods/${id}`,
    workPeriodDays: `${environment.baseUrl}/api/0.1/work-periods/days`
  };

  public static LOAN_SERVICE_API = {
    baseProductConfig: `${environment.baseUrl}/api/0.1/product-config`,
    byId: (id) => `${environment.baseUrl}/api/0.1/product-config/${id}`,
    allProductConfigOfService: `${environment.baseUrl}/api/0.1/product-config/for-service`,
    saveAllProductConfig: `${environment.baseUrl}/api/0.1/product-config/saveAll`,
    
    baseProduct: `${environment.baseUrl}/api/0.1/loan-product`,
    productById: (id) => `${environment.baseUrl}/api/0.1/loan-product/${id}`,
    allProducts: `${environment.baseUrl}/api/0.1/loan-product/all`
  };

  public static USER_API = {
    getByEmail: (email) => `${environment.baseUrl}/api/0.1/users/email/${email}`,
    createUser: `${environment.baseUrl}/api/0.1/users`,
    createAddress: `${environment.baseUrl}/api/0.1/addresses`,
    chargeUser: `${environment.baseUrl}/api/0.1/users/payment`
  };

  public static USER_MANAGEMENT_API = {
    base: `${environment.baseUrl}/api/0.1/users`,
    getAddressById: (id) => `${environment.baseUrl}/api/0.1/users/${id}/address`,
    byId: (id) => `${environment.baseUrl}/api/0.1/users/${id}`,
    updateInfo: (id) => `${environment.baseUrl}/api/0.1/users/${id}/details`,
    resetPasswordLink: `${environment.baseUrl}/reset/link`,
    resetPassword: `${environment.baseUrl}/reset`,
  };

  public static BUSINESS_SRV_API = {
    base: `${environment.baseUrl}/api/0.1/services`,
    byId: (id) => `${environment.baseUrl}/api/0.1/services/${id}`,
    parametersTree: (id) => `${environment.baseUrl}/api/0.1/services/${id}/parameter-option-tree`,
    parameter: (id) => `${environment.baseUrl}/api/0.1/parameters/${id}`,
    option: (id) => `${environment.baseUrl}/api/0.1/options/${id}`,
    options: `${environment.baseUrl}/api/0.1/options`,
    holidayDates: `${environment.baseUrl}/api/0.1/holiday-days`,
    workPeriod: `${environment.baseUrl}/api/0.1/work-periods`,
    image: (id) => `${environment.baseUrl}/api/0.1/services/${id}/image`,
    getAllServiceParameters: (id) => `${environment.baseUrl}/api/0.1/services/${id}/parameters`,
    getAllSubCategories: `${environment.baseUrl}/api/0.1/services/sub-category/for-business`,
    getServiceBasedOnSubCategory: `${environment.baseUrl}/api/0.1/services/sub-category`
  };

  public static SERVICE_APPOINTMENT_CONFIG = {
    getAppConfig: `${environment.baseUrl}/api/0.1/appointment-service-config/for-service`,
    base: `${environment.baseUrl}/api/0.1/appointment-service-config`,
    byId: (id) => `${environment.baseUrl}/api/0.1/appointment-service-config/${id}`
  };

  public static APPOINTMENT_API = {
    byId: (id) => `${environment.baseUrl}/api/0.1/appointments/${id}`,
    book: `${environment.baseUrl}/api/0.1/appointments/book`,
    cancel: (appointmentId) => `${environment.baseUrl}/api/0.1/appointments/${appointmentId}/cancel`,
    adminCancel: (appointmentId) => `${environment.baseUrl}/api/0.1/admin/appointments/${appointmentId}/cancel`,
    reschedule: (appointmentId) => `${environment.baseUrl}/api/0.1/appointments/${appointmentId}/reschedule`,
    adminReschedule: (appointmentId) => `${environment.baseUrl}/api/0.1/admin/appointments/${appointmentId}/reschedule`,
    userBooked: `${environment.baseUrl}/api/0.1/appointments/booked/for-user`,
    bookedForBusiness: `${environment.baseUrl}/api/0.1/appointments/booked/for-business`,
    latestAppointmentForPeriod: `${environment.baseUrl}/api/0.1/appointments/latest`,
    allAppointmentForPeriod: `${environment.baseUrl}/api/0.1/appointments/all`,
    chargeCustomer: `${environment.baseUrl}/api/0.1/appointments/charge-customer`,
    appointmentOptions: (appointmentId) => `${environment.baseUrl}/api/0.1/appointments/${appointmentId}/options`,
    allForOffer: (offerId) => `${environment.baseUrl}/api/0.1/appointments/for-offer/${offerId}`,
    allForPeriod: `${environment.baseUrl}/api/0.1/appointments/for-period`
  };

  public static FACEBOOK_INTEGRATION_API = {
    base: `${environment.baseUrl}/api/0.1/facebook-integration`,
    userPagesData: `${environment.baseUrl}/api/0.1/facebook-integration/pages-data`,
    byId: (id) => `${environment.baseUrl}/facebook-integration-service/api/0.1/facebook-integration/${id}`,
  };

  public static SMARTBOT_CHAT_INTEGRATION_API = {
    base: `${environment.baseUrl}/api/0.1/sb-integrations`,
    byId: (id) => `${environment.baseUrl}/api/0.1/sb-integrations/${id}`,
  };

  public static BUSINESS_SERVICE_HOLIDAY = {
    base: `${environment.baseUrl}/api/0.1/holiday-days`,
    byId: (id) => `${environment.baseUrl}/api/0.1/holiday-days/${id}`,
    addHolidayDates: `${environment.baseUrl}/api/0.1/holiday-days/dates`
  };

  public static USER_ADDRESS_API = {
    base: `${environment.baseUrl}/api/0.1/addresses`,
    byId: (id) => `${environment.baseUrl}/api/0.1/addresses/${id}`
  };

  public static PERMISSION_API = {
    permissionsForRole: `${environment.baseUrl}/api/0.1/business-roles/permissions/for-role`
  };

  public static COMMENT_API = {
    base: `${environment.baseUrl}/api/0.1/comments`,
    byId: (id) => `${environment.baseUrl}/api/0.1/comments/${id}`
  };

  public static PARAMETER_SERVICE_API = {
    base: `${environment.baseUrl}/api/0.1/parameters`,
    byId: (id) => `${environment.baseUrl}/api/0.1/parameters/${id}`,
    createRootParameter: `${environment.baseUrl}/api/0.1/parameters/root`,
    deleteOption: (parameterId, optionId) => `${environment.baseUrl}/api/0.1/parameters/${parameterId}/options/${optionId}`,
    saveExistingOptions: (parameterId, optionId) => `${environment.baseUrl}/api/0.1/parameters/${parameterId}/options/add-existing?optionId=${optionId}`
  };

  public static PARAMETER_OPTION_SERVICE_API = {
    base: `${environment.baseUrl}/api/0.1/options`,
    byId: (id) => `${environment.baseUrl}/api/0.1/options/${id}`,
    byBusinessId: (businessId) => `${environment.baseUrl}/api/0.1/options/business/${businessId}`,
  };
}

export class Role {

  public static SYSTEM_ADMINISTRATOR = 'SYSTEM_ADMINISTRATOR';
  public static BUSINESS_ADMINISTRATOR = 'BUSINESS_USER';
  public static GUEST = 'GUEST';

  public static Permission = {
    CREATE_BUSINESS: 'CREATE_BUSINESS',
    EDIT_BUSINESS: 'EDIT_BUSINESS',
    DELETE_BUSINESS: 'DELETE_BUSINESS',
    CREATE_SERVICE: 'CREATE_SERVICE',
    EDIT_SERVICE: 'EDIT_SERVICE',
    DELETE_SERVICE: 'DELETE_SERVICE',
    CREATE_USER: 'CREATE_USER',
    UPDATE_USER: 'UPDATE_USER',
    DELETE_USER: 'UPDATE_USER',
    GUEST_RESCHEDULE_APPOINTMENT: 'GUEST_RESCHEDULE_APPOINTMENT',
    GUEST_CANCEL_APPOINTMENT: 'GUEST_CANCEL_APPOINTMENT',
    RESCHEDULE_APPOINTMENT: 'RESCHEDULE_APPOINTMENT',
    CANCEL_APPOINTMENT: 'CANCEL_APPOINTMENT',
    MANAGE_INTEGRATIONS: 'MANAGE_INTEGRATIONS',
    MANAGE_OFFERS: 'MANAGE_OFFERS'
  };
}
