import {Request} from 'aws-sdk/lib/request';
import {Response} from 'aws-sdk/lib/response';
import {AWSError} from 'aws-sdk/lib/error';
import {Service} from 'aws-sdk/lib/service';
import {ServiceConfigurationOptions} from 'aws-sdk/lib/service';
import {ConfigBase as Config} from 'aws-sdk/lib/config';
interface Blob {}
declare class SSOAdmin extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SSOAdmin.Types.ClientConfiguration)
  config: Config & SSOAdmin.Types.ClientConfiguration;
  /**
   * Attaches an IAM managed policy ARN to a permission set.
   */
  attachManagedPolicyToPermissionSet(params: SSOAdmin.Types.AttachManagedPolicyToPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse, AWSError>;
  /**
   * Attaches an IAM managed policy ARN to a permission set.
   */
  attachManagedPolicyToPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse, AWSError>;
  /**
   * Assigns access to a principal for a specified AWS account using a specified permission set.  The term principal here refers to a user or group that is defined in AWS SSO. 
   */
  createAccountAssignment(params: SSOAdmin.Types.CreateAccountAssignmentRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreateAccountAssignmentResponse) => void): Request<SSOAdmin.Types.CreateAccountAssignmentResponse, AWSError>;
  /**
   * Assigns access to a principal for a specified AWS account using a specified permission set.  The term principal here refers to a user or group that is defined in AWS SSO. 
   */
  createAccountAssignment(callback?: (err: AWSError, data: SSOAdmin.Types.CreateAccountAssignmentResponse) => void): Request<SSOAdmin.Types.CreateAccountAssignmentResponse, AWSError>;
  /**
   * Creates a permission set within a specified SSO instance.
   */
  createPermissionSet(params: SSOAdmin.Types.CreatePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreatePermissionSetResponse) => void): Request<SSOAdmin.Types.CreatePermissionSetResponse, AWSError>;
  /**
   * Creates a permission set within a specified SSO instance.
   */
  createPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.CreatePermissionSetResponse) => void): Request<SSOAdmin.Types.CreatePermissionSetResponse, AWSError>;
  /**
   * Deletes a principal's access from a specified AWS account using a specified permission set.
   */
  deleteAccountAssignment(params: SSOAdmin.Types.DeleteAccountAssignmentRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteAccountAssignmentResponse) => void): Request<SSOAdmin.Types.DeleteAccountAssignmentResponse, AWSError>;
  /**
   * Deletes a principal's access from a specified AWS account using a specified permission set.
   */
  deleteAccountAssignment(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteAccountAssignmentResponse) => void): Request<SSOAdmin.Types.DeleteAccountAssignmentResponse, AWSError>;
  /**
   * Deletes the inline policy from a specified permission set.
   */
  deleteInlinePolicyFromPermissionSet(params: SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse, AWSError>;
  /**
   * Deletes the inline policy from a specified permission set.
   */
  deleteInlinePolicyFromPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse, AWSError>;
  /**
   * Deletes the specified permission set.
   */
  deletePermissionSet(params: SSOAdmin.Types.DeletePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeletePermissionSetResponse) => void): Request<SSOAdmin.Types.DeletePermissionSetResponse, AWSError>;
  /**
   * Deletes the specified permission set.
   */
  deletePermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DeletePermissionSetResponse) => void): Request<SSOAdmin.Types.DeletePermissionSetResponse, AWSError>;
  /**
   * Describes the status of the assignment creation request.
   */
  describeAccountAssignmentCreationStatus(params: SSOAdmin.Types.DescribeAccountAssignmentCreationStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Describes the status of the assignment creation request.
   */
  describeAccountAssignmentCreationStatus(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Describes the status of the assignment deletion request.
   */
  describeAccountAssignmentDeletionStatus(params: SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Describes the status of the assignment deletion request.
   */
  describeAccountAssignmentDeletionStatus(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Gets the details of the permission set.
   */
  describePermissionSet(params: SSOAdmin.Types.DescribePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetResponse, AWSError>;
  /**
   * Gets the details of the permission set.
   */
  describePermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetResponse, AWSError>;
  /**
   * Describes the status for the given permission set provisioning request.
   */
  describePermissionSetProvisioningStatus(params: SSOAdmin.Types.DescribePermissionSetProvisioningStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Describes the status for the given permission set provisioning request.
   */
  describePermissionSetProvisioningStatus(callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Detaches the attached IAM managed policy ARN from the specified permission set.
   */
  detachManagedPolicyFromPermissionSet(params: SSOAdmin.Types.DetachManagedPolicyFromPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse, AWSError>;
  /**
   * Detaches the attached IAM managed policy ARN from the specified permission set.
   */
  detachManagedPolicyFromPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse, AWSError>;
  /**
   * Obtains the inline policy assigned to the permission set.
   */
  getInlinePolicyForPermissionSet(params: SSOAdmin.Types.GetInlinePolicyForPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse) => void): Request<SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse, AWSError>;
  /**
   * Obtains the inline policy assigned to the permission set.
   */
  getInlinePolicyForPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse) => void): Request<SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse, AWSError>;
  /**
   * Lists the status of the AWS account assignment creation requests for a specified SSO instance.
   */
  listAccountAssignmentCreationStatus(params: SSOAdmin.Types.ListAccountAssignmentCreationStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Lists the status of the AWS account assignment creation requests for a specified SSO instance.
   */
  listAccountAssignmentCreationStatus(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Lists the status of the AWS account assignment deletion requests for a specified SSO instance.
   */
  listAccountAssignmentDeletionStatus(params: SSOAdmin.Types.ListAccountAssignmentDeletionStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Lists the status of the AWS account assignment deletion requests for a specified SSO instance.
   */
  listAccountAssignmentDeletionStatus(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Lists the assignee of the specified AWS account with the specified permission set.
   */
  listAccountAssignments(params: SSOAdmin.Types.ListAccountAssignmentsRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentsResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentsResponse, AWSError>;
  /**
   * Lists the assignee of the specified AWS account with the specified permission set.
   */
  listAccountAssignments(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentsResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentsResponse, AWSError>;
  /**
   * Lists all the AWS accounts where the specified permission set is provisioned.
   */
  listAccountsForProvisionedPermissionSet(params: SSOAdmin.Types.ListAccountsForProvisionedPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse) => void): Request<SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse, AWSError>;
  /**
   * Lists all the AWS accounts where the specified permission set is provisioned.
   */
  listAccountsForProvisionedPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse) => void): Request<SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse, AWSError>;
  /**
   * Lists the SSO instances that the caller has access to.
   */
  listInstances(params: SSOAdmin.Types.ListInstancesRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListInstancesResponse) => void): Request<SSOAdmin.Types.ListInstancesResponse, AWSError>;
  /**
   * Lists the SSO instances that the caller has access to.
   */
  listInstances(callback?: (err: AWSError, data: SSOAdmin.Types.ListInstancesResponse) => void): Request<SSOAdmin.Types.ListInstancesResponse, AWSError>;
  /**
   * Lists the IAM managed policy that is attached to a specified permission set.
   */
  listManagedPoliciesInPermissionSet(params: SSOAdmin.Types.ListManagedPoliciesInPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse) => void): Request<SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse, AWSError>;
  /**
   * Lists the IAM managed policy that is attached to a specified permission set.
   */
  listManagedPoliciesInPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse) => void): Request<SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse, AWSError>;
  /**
   * Lists the status of the permission set provisioning requests for a specified SSO instance.
   */
  listPermissionSetProvisioningStatus(params: SSOAdmin.Types.ListPermissionSetProvisioningStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Lists the status of the permission set provisioning requests for a specified SSO instance.
   */
  listPermissionSetProvisioningStatus(callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Lists the PermissionSets in an SSO instance.
   */
  listPermissionSets(params: SSOAdmin.Types.ListPermissionSetsRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsResponse, AWSError>;
  /**
   * Lists the PermissionSets in an SSO instance.
   */
  listPermissionSets(callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsResponse, AWSError>;
  /**
   * Lists all the permission sets that are provisioned to a specified AWS account.
   */
  listPermissionSetsProvisionedToAccount(params: SSOAdmin.Types.ListPermissionSetsProvisionedToAccountRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse, AWSError>;
  /**
   * Lists all the permission sets that are provisioned to a specified AWS account.
   */
  listPermissionSetsProvisionedToAccount(callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse, AWSError>;
  /**
   * Lists the tags that are attached to a specified resource.
   */
  listTagsForResource(params: SSOAdmin.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListTagsForResourceResponse) => void): Request<SSOAdmin.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags that are attached to a specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: SSOAdmin.Types.ListTagsForResourceResponse) => void): Request<SSOAdmin.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * The process by which a specified permission set is provisioned to the specified target.
   */
  provisionPermissionSet(params: SSOAdmin.Types.ProvisionPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ProvisionPermissionSetResponse) => void): Request<SSOAdmin.Types.ProvisionPermissionSetResponse, AWSError>;
  /**
   * The process by which a specified permission set is provisioned to the specified target.
   */
  provisionPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.ProvisionPermissionSetResponse) => void): Request<SSOAdmin.Types.ProvisionPermissionSetResponse, AWSError>;
  /**
   * Attaches an IAM inline policy to a permission set.
   */
  putInlinePolicyToPermissionSet(params: SSOAdmin.Types.PutInlinePolicyToPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse, AWSError>;
  /**
   * Attaches an IAM inline policy to a permission set.
   */
  putInlinePolicyToPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse, AWSError>;
  /**
   * Associates a set of tags with a specified resource.
   */
  tagResource(params: SSOAdmin.Types.TagResourceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.TagResourceResponse) => void): Request<SSOAdmin.Types.TagResourceResponse, AWSError>;
  /**
   * Associates a set of tags with a specified resource.
   */
  tagResource(callback?: (err: AWSError, data: SSOAdmin.Types.TagResourceResponse) => void): Request<SSOAdmin.Types.TagResourceResponse, AWSError>;
  /**
   * Disassociates a set of tags from a specified resource.
   */
  untagResource(params: SSOAdmin.Types.UntagResourceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.UntagResourceResponse) => void): Request<SSOAdmin.Types.UntagResourceResponse, AWSError>;
  /**
   * Disassociates a set of tags from a specified resource.
   */
  untagResource(callback?: (err: AWSError, data: SSOAdmin.Types.UntagResourceResponse) => void): Request<SSOAdmin.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates an existing permission set.
   */
  updatePermissionSet(params: SSOAdmin.Types.UpdatePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.UpdatePermissionSetResponse) => void): Request<SSOAdmin.Types.UpdatePermissionSetResponse, AWSError>;
  /**
   * Updates an existing permission set.
   */
  updatePermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.UpdatePermissionSetResponse) => void): Request<SSOAdmin.Types.UpdatePermissionSetResponse, AWSError>;
}
declare namespace SSOAdmin {
  export interface AccountAssignment {
    /**
     * The identifier of the AWS account.
     */
    AccountId?: AccountId;
    /**
     * The ARN of the permission set. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType?: PrincipalType;
    /**
     * The identifier of the principal.
     */
    PrincipalId?: PrincipalId;
  }
  export type AccountAssignmentList = AccountAssignment[];
  export interface AccountAssignmentOperationStatus {
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The message that contains an error or exception in case of an operation failure.
     */
    FailureReason?: Reason;
    /**
     * The identifier for the chosen target.
     */
    TargetId?: TargetId;
    /**
     * The entity type for which the assignment will be created.
     */
    TargetType?: TargetType;
    /**
     * The ARN of the permission set. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType?: PrincipalType;
    /**
     * The identifier of the principal.
     */
    PrincipalId?: PrincipalId;
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
  }
  export type AccountAssignmentOperationStatusList = AccountAssignmentOperationStatusMetadata[];
  export interface AccountAssignmentOperationStatusMetadata {
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
  }
  export type AccountId = string;
  export type AccountList = AccountId[];
  export interface AttachManagedPolicyToPermissionSetRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet that the managed policy should be attached to.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The IAM managed policy ARN to be attached to a permission set.
     */
    ManagedPolicyArn: ManagedPolicyArn;
  }
  export interface AttachManagedPolicyToPermissionSetResponse {
  }
  export interface AttachedManagedPolicy {
    /**
     * The name of the IAM managed policy.
     */
    Name?: Name;
    /**
     * The ARN of the IAM managed policy. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    Arn?: ManagedPolicyArn;
  }
  export type AttachedManagedPolicyList = AttachedManagedPolicy[];
  export interface CreateAccountAssignmentRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier for the chosen target.
     */
    TargetId: TargetId;
    /**
     * The entity type for which the assignment will be created.
     */
    TargetType: TargetType;
    /**
     * The ARN of the permission set that the admin wants to grant the principal access to.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType: PrincipalType;
    /**
     * The identifier of the principal.
     */
    PrincipalId: PrincipalId;
  }
  export interface CreateAccountAssignmentResponse {
    /**
     * The status object for the account assignment creation operation.
     */
    AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
  }
  export interface CreatePermissionSetRequest {
    /**
     * The name of the PermissionSet.
     */
    Name: PermissionSetName;
    /**
     * The description of the PermissionSet.
     */
    Description?: PermissionSetDescription;
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The length of time that the application user sessions are valid in the ISO-8601 standard.
     */
    SessionDuration?: Duration;
    /**
     * Used to redirect users within the application during the federation authentication process.
     */
    RelayState?: RelayState;
    /**
     * The tags to attach to the new PermissionSet.
     */
    Tags?: TagList;
  }
  export interface CreatePermissionSetResponse {
    /**
     * Defines the level of access on an AWS account.
     */
    PermissionSet?: PermissionSet;
  }
  export type _Date = Date;
  export interface DeleteAccountAssignmentRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier for the chosen target.
     */
    TargetId: TargetId;
    /**
     * The entity type for which the assignment will be deleted.
     */
    TargetType: TargetType;
    /**
     * The ARN of the permission set that will be used to remove access.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The entity type for which the assignment will be deleted.
     */
    PrincipalType: PrincipalType;
    /**
     * The identifier of the principal.
     */
    PrincipalId: PrincipalId;
  }
  export interface DeleteAccountAssignmentResponse {
    /**
     * The status object for the account assignment deletion operation.
     */
    AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
  }
  export interface DeleteInlinePolicyFromPermissionSetRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set that will be used to remove access.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DeleteInlinePolicyFromPermissionSetResponse {
  }
  export interface DeletePermissionSetRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set that should be deleted.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DeletePermissionSetResponse {
  }
  export interface DescribeAccountAssignmentCreationStatusRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier that is used to track the request operation progress.
     */
    AccountAssignmentCreationRequestId: UUId;
  }
  export interface DescribeAccountAssignmentCreationStatusResponse {
    /**
     * The status object for the account assignment creation operation.
     */
    AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
  }
  export interface DescribeAccountAssignmentDeletionStatusRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier that is used to track the request operation progress.
     */
    AccountAssignmentDeletionRequestId: UUId;
  }
  export interface DescribeAccountAssignmentDeletionStatusResponse {
    /**
     * The status object for the account assignment deletion operation.
     */
    AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
  }
  export interface DescribePermissionSetProvisioningStatusRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier that is provided by the ProvisionPermissionSet call to retrieve the current status of the provisioning workflow.
     */
    ProvisionPermissionSetRequestId: UUId;
  }
  export interface DescribePermissionSetProvisioningStatusResponse {
    /**
     * The status object for the permission set provisioning operation.
     */
    PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
  }
  export interface DescribePermissionSetRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DescribePermissionSetResponse {
    /**
     * Describes the level of access on an AWS account.
     */
    PermissionSet?: PermissionSet;
  }
  export interface DetachManagedPolicyFromPermissionSetRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet from which the policy should be detached.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The IAM managed policy ARN to be attached to a permission set.
     */
    ManagedPolicyArn: ManagedPolicyArn;
  }
  export interface DetachManagedPolicyFromPermissionSetResponse {
  }
  export type Duration = string;
  export type GeneralArn = string;
  export interface GetInlinePolicyForPermissionSetRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface GetInlinePolicyForPermissionSetResponse {
    /**
     * The IAM inline policy that is attached to the permission set.
     */
    InlinePolicy?: PermissionSetPolicyDocument;
  }
  export type Id = string;
  export type InstanceArn = string;
  export type InstanceList = InstanceMetadata[];
  export interface InstanceMetadata {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn?: InstanceArn;
    /**
     * The identifier of the identity store that is connected to the SSO instance.
     */
    IdentityStoreId?: Id;
  }
  export interface ListAccountAssignmentCreationStatusRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * Filters results based on the passed attribute value.
     */
    Filter?: OperationStatusFilter;
  }
  export interface ListAccountAssignmentCreationStatusResponse {
    /**
     * The status object for the account assignment creation operation.
     */
    AccountAssignmentsCreationStatus?: AccountAssignmentOperationStatusList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountAssignmentDeletionStatusRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * Filters results based on the passed attribute value.
     */
    Filter?: OperationStatusFilter;
  }
  export interface ListAccountAssignmentDeletionStatusResponse {
    /**
     * The status object for the account assignment deletion operation.
     */
    AccountAssignmentsDeletionStatus?: AccountAssignmentOperationStatusList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountAssignmentsRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier of the AWS account from which to list the assignments.
     */
    AccountId: TargetId;
    /**
     * The ARN of the permission set from which to list assignments.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountAssignmentsResponse {
    /**
     * The list of assignments that match the input AWS account and permission set.
     */
    AccountAssignments?: AccountAssignmentList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountsForProvisionedPermissionSetRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet from which the associated AWS accounts will be listed.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The permission set provisioning status for an AWS account.
     */
    ProvisioningStatus?: ProvisioningStatus;
    /**
     * The maximum number of results to display for the PermissionSet.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountsForProvisionedPermissionSetResponse {
    /**
     * The list of AWS AccountIds.
     */
    AccountIds?: AccountList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListInstancesRequest {
    /**
     * The maximum number of results to display for the instance.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListInstancesResponse {
    /**
     * Lists the SSO instances that the caller has access to.
     */
    Instances?: InstanceList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListManagedPoliciesInPermissionSetRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet whose managed policies will be listed.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The maximum number of results to display for the PermissionSet.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListManagedPoliciesInPermissionSetResponse {
    /**
     * The array of the AttachedManagedPolicy data type object.
     */
    AttachedManagedPolicies?: AttachedManagedPolicyList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListPermissionSetProvisioningStatusRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * Filters results based on the passed attribute value.
     */
    Filter?: OperationStatusFilter;
  }
  export interface ListPermissionSetProvisioningStatusResponse {
    /**
     * The status object for the permission set provisioning operation.
     */
    PermissionSetsProvisioningStatus?: PermissionSetProvisioningStatusList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListPermissionSetsProvisionedToAccountRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier of the AWS account from which to list the assignments.
     */
    AccountId: AccountId;
    /**
     * The status object for the permission set provisioning operation.
     */
    ProvisioningStatus?: ProvisioningStatus;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListPermissionSetsProvisionedToAccountResponse {
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * Defines the level of access that an AWS account has.
     */
    PermissionSets?: PermissionSetList;
  }
  export interface ListPermissionSetsRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
  }
  export interface ListPermissionSetsResponse {
    /**
     * Defines the level of access on an AWS account.
     */
    PermissionSets?: PermissionSetList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the resource with the tags to be listed.
     */
    ResourceArn: GeneralArn;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListTagsForResourceResponse {
    /**
     * A set of key-value pairs that are used to manage the resource.
     */
    Tags?: TagList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export type ManagedPolicyArn = string;
  export type MaxResults = number;
  export type Name = string;
  export interface OperationStatusFilter {
    /**
     * Filters the list operations result based on the status attribute.
     */
    Status?: StatusValues;
  }
  export interface PermissionSet {
    /**
     * The name of the permission set.
     */
    Name?: PermissionSetName;
    /**
     * The ARN of the permission set. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * The description of the PermissionSet.
     */
    Description?: PermissionSetDescription;
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
    /**
     * The length of time that the application user sessions are valid for in the ISO-8601 standard.
     */
    SessionDuration?: Duration;
    /**
     * Used to redirect users within the application during the federation authentication process.
     */
    RelayState?: RelayState;
  }
  export type PermissionSetArn = string;
  export type PermissionSetDescription = string;
  export type PermissionSetList = PermissionSetArn[];
  export type PermissionSetName = string;
  export type PermissionSetPolicyDocument = string;
  export interface PermissionSetProvisioningStatus {
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The identifier of the AWS account from which to list the assignments.
     */
    AccountId?: AccountId;
    /**
     * The ARN of the permission set that is being provisioned. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * The message that contains an error or exception in case of an operation failure.
     */
    FailureReason?: Reason;
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
  }
  export type PermissionSetProvisioningStatusList = PermissionSetProvisioningStatusMetadata[];
  export interface PermissionSetProvisioningStatusMetadata {
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
  }
  export type PrincipalId = string;
  export type PrincipalType = "USER"|"GROUP"|string;
  export interface ProvisionPermissionSetRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The identifier for the chosen target.
     */
    TargetId?: TargetId;
    /**
     * The entity type for which the assignment will be created.
     */
    TargetType: ProvisionTargetType;
  }
  export interface ProvisionPermissionSetResponse {
    /**
     * The status object for the permission set provisioning operation.
     */
    PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
  }
  export type ProvisionTargetType = "AWS_ACCOUNT"|"ALL_PROVISIONED_ACCOUNTS"|string;
  export type ProvisioningStatus = "LATEST_PERMISSION_SET_PROVISIONED"|"LATEST_PERMISSION_SET_NOT_PROVISIONED"|string;
  export interface PutInlinePolicyToPermissionSetRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The IAM inline policy to attach to a PermissionSet.
     */
    InlinePolicy: PermissionSetPolicyDocument;
  }
  export interface PutInlinePolicyToPermissionSetResponse {
  }
  export type Reason = string;
  export type RelayState = string;
  export type StatusValues = "IN_PROGRESS"|"FAILED"|"SUCCEEDED"|string;
  export interface Tag {
    /**
     * The key for the tag.
     */
    Key?: TagKey;
    /**
     * The value of the tag.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the resource with the tags to be listed.
     */
    ResourceArn: GeneralArn;
    /**
     * A set of key-value pairs that are used to manage the resource.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TargetId = string;
  export type TargetType = "AWS_ACCOUNT"|string;
  export type Token = string;
  export type UUId = string;
  export interface UntagResourceRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the resource with the tags to be listed.
     */
    ResourceArn: GeneralArn;
    /**
     * The keys of tags that are attached to the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdatePermissionSetRequest {
    /**
     * The ARN of the SSO instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The description of the PermissionSet.
     */
    Description?: PermissionSetDescription;
    /**
     * The length of time that the application user sessions are valid for in the ISO-8601 standard.
     */
    SessionDuration?: Duration;
    /**
     * Used to redirect users within the application during the federation authentication process.
     */
    RelayState?: RelayState;
  }
  export interface UpdatePermissionSetResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-07-20"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SSOAdmin client.
   */
  export import Types = SSOAdmin;
}
export = SSOAdmin;