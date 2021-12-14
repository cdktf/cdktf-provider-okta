// https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRuleProfileEnrollmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow or deny access based on the rule conditions: ALLOW or DENY
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html#access PolicyRuleProfileEnrollment#access}
  */
  readonly access?: string;
  /**
  * Indicates whether email verification should occur before access is granted
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html#email_verification PolicyRuleProfileEnrollment#email_verification}
  */
  readonly emailVerification?: boolean | cdktf.IResolvable;
  /**
  * ID of a Registration Inline Hook
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html#inline_hook_id PolicyRuleProfileEnrollment#inline_hook_id}
  */
  readonly inlineHookId?: string;
  /**
  * ID of the policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html#policy_id PolicyRuleProfileEnrollment#policy_id}
  */
  readonly policyId: string;
  /**
  * The ID of a Group that this User should be added to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html#target_group_id PolicyRuleProfileEnrollment#target_group_id}
  */
  readonly targetGroupId?: string;
  /**
  * Which action should be taken if this User is new
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html#unknown_user_action PolicyRuleProfileEnrollment#unknown_user_action}
  */
  readonly unknownUserAction: string;
  /**
  * profile_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html#profile_attributes PolicyRuleProfileEnrollment#profile_attributes}
  */
  readonly profileAttributes?: PolicyRuleProfileEnrollmentProfileAttributes[];
}
export interface PolicyRuleProfileEnrollmentProfileAttributes {
  /**
  * A display-friendly label for this property
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html#label PolicyRuleProfileEnrollment#label}
  */
  readonly label: string;
  /**
  * The name of a User Profile property
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html#name PolicyRuleProfileEnrollment#name}
  */
  readonly name: string;
  /**
  * Indicates if this property is required for enrollment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html#required PolicyRuleProfileEnrollment#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function policyRuleProfileEnrollmentProfileAttributesToTerraform(struct?: PolicyRuleProfileEnrollmentProfileAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html okta_policy_rule_profile_enrollment}
*/
export class PolicyRuleProfileEnrollment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_policy_rule_profile_enrollment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment.html okta_policy_rule_profile_enrollment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRuleProfileEnrollmentConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRuleProfileEnrollmentConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_rule_profile_enrollment',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._access = config.access;
    this._emailVerification = config.emailVerification;
    this._inlineHookId = config.inlineHookId;
    this._policyId = config.policyId;
    this._targetGroupId = config.targetGroupId;
    this._unknownUserAction = config.unknownUserAction;
    this._profileAttributes = config.profileAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // email_verification - computed: false, optional: true, required: false
  private _emailVerification?: boolean | cdktf.IResolvable; 
  public get emailVerification() {
    return this.getBooleanAttribute('email_verification') as any;
  }
  public set emailVerification(value: boolean | cdktf.IResolvable) {
    this._emailVerification = value;
  }
  public resetEmailVerification() {
    this._emailVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationInput() {
    return this._emailVerification;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inline_hook_id - computed: false, optional: true, required: false
  private _inlineHookId?: string; 
  public get inlineHookId() {
    return this.getStringAttribute('inline_hook_id');
  }
  public set inlineHookId(value: string) {
    this._inlineHookId = value;
  }
  public resetInlineHookId() {
    this._inlineHookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineHookIdInput() {
    return this._inlineHookId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_group_id - computed: false, optional: true, required: false
  private _targetGroupId?: string; 
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }
  public set targetGroupId(value: string) {
    this._targetGroupId = value;
  }
  public resetTargetGroupId() {
    this._targetGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdInput() {
    return this._targetGroupId;
  }

  // unknown_user_action - computed: false, optional: false, required: true
  private _unknownUserAction?: string; 
  public get unknownUserAction() {
    return this.getStringAttribute('unknown_user_action');
  }
  public set unknownUserAction(value: string) {
    this._unknownUserAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUserActionInput() {
    return this._unknownUserAction;
  }

  // profile_attributes - computed: false, optional: true, required: false
  private _profileAttributes?: PolicyRuleProfileEnrollmentProfileAttributes[]; 
  public get profileAttributes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('profile_attributes') as any;
  }
  public set profileAttributes(value: PolicyRuleProfileEnrollmentProfileAttributes[]) {
    this._profileAttributes = value;
  }
  public resetProfileAttributes() {
    this._profileAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileAttributesInput() {
    return this._profileAttributes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      email_verification: cdktf.booleanToTerraform(this._emailVerification),
      inline_hook_id: cdktf.stringToTerraform(this._inlineHookId),
      policy_id: cdktf.stringToTerraform(this._policyId),
      target_group_id: cdktf.stringToTerraform(this._targetGroupId),
      unknown_user_action: cdktf.stringToTerraform(this._unknownUserAction),
      profile_attributes: cdktf.listMapper(policyRuleProfileEnrollmentProfileAttributesToTerraform)(this._profileAttributes),
    };
  }
}
