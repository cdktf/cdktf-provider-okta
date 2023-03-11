// https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRuleProfileEnrollmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow or deny access based on the rule conditions: ALLOW or DENY
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#access PolicyRuleProfileEnrollment#access}
  */
  readonly access?: string;
  /**
  * Indicates whether email verification should occur before access is granted
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#email_verification PolicyRuleProfileEnrollment#email_verification}
  */
  readonly emailVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#id PolicyRuleProfileEnrollment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of a Registration Inline Hook
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#inline_hook_id PolicyRuleProfileEnrollment#inline_hook_id}
  */
  readonly inlineHookId?: string;
  /**
  * ID of the policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#policy_id PolicyRuleProfileEnrollment#policy_id}
  */
  readonly policyId: string;
  /**
  * The ID of a Group that this User should be added to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#target_group_id PolicyRuleProfileEnrollment#target_group_id}
  */
  readonly targetGroupId?: string;
  /**
  * Value created by the backend. If present all policy updates must include this attribute/value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#ui_schema_id PolicyRuleProfileEnrollment#ui_schema_id}
  */
  readonly uiSchemaId?: string;
  /**
  * Which action should be taken if this User is new
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#unknown_user_action PolicyRuleProfileEnrollment#unknown_user_action}
  */
  readonly unknownUserAction: string;
  /**
  * profile_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#profile_attributes PolicyRuleProfileEnrollment#profile_attributes}
  */
  readonly profileAttributes?: PolicyRuleProfileEnrollmentProfileAttributes[] | cdktf.IResolvable;
}
export interface PolicyRuleProfileEnrollmentProfileAttributes {
  /**
  * A display-friendly label for this property
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#label PolicyRuleProfileEnrollment#label}
  */
  readonly label: string;
  /**
  * The name of a User Profile property
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#name PolicyRuleProfileEnrollment#name}
  */
  readonly name: string;
  /**
  * Indicates if this property is required for enrollment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment#required PolicyRuleProfileEnrollment#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function policyRuleProfileEnrollmentProfileAttributesToTerraform(struct?: PolicyRuleProfileEnrollmentProfileAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}

export class PolicyRuleProfileEnrollmentProfileAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PolicyRuleProfileEnrollmentProfileAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleProfileEnrollmentProfileAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._name = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._name = value.name;
      this._required = value.required;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}

export class PolicyRuleProfileEnrollmentProfileAttributesList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleProfileEnrollmentProfileAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PolicyRuleProfileEnrollmentProfileAttributesOutputReference {
    return new PolicyRuleProfileEnrollmentProfileAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment okta_policy_rule_profile_enrollment}
*/
export class PolicyRuleProfileEnrollment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_rule_profile_enrollment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_profile_enrollment okta_policy_rule_profile_enrollment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRuleProfileEnrollmentConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRuleProfileEnrollmentConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_rule_profile_enrollment',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.44.0',
        providerVersionConstraint: '~> 3.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._emailVerification = config.emailVerification;
    this._id = config.id;
    this._inlineHookId = config.inlineHookId;
    this._policyId = config.policyId;
    this._targetGroupId = config.targetGroupId;
    this._uiSchemaId = config.uiSchemaId;
    this._unknownUserAction = config.unknownUserAction;
    this._profileAttributes.internalValue = config.profileAttributes;
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
    return this.getBooleanAttribute('email_verification');
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // ui_schema_id - computed: false, optional: true, required: false
  private _uiSchemaId?: string; 
  public get uiSchemaId() {
    return this.getStringAttribute('ui_schema_id');
  }
  public set uiSchemaId(value: string) {
    this._uiSchemaId = value;
  }
  public resetUiSchemaId() {
    this._uiSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiSchemaIdInput() {
    return this._uiSchemaId;
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
  private _profileAttributes = new PolicyRuleProfileEnrollmentProfileAttributesList(this, "profile_attributes", false);
  public get profileAttributes() {
    return this._profileAttributes;
  }
  public putProfileAttributes(value: PolicyRuleProfileEnrollmentProfileAttributes[] | cdktf.IResolvable) {
    this._profileAttributes.internalValue = value;
  }
  public resetProfileAttributes() {
    this._profileAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileAttributesInput() {
    return this._profileAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      email_verification: cdktf.booleanToTerraform(this._emailVerification),
      id: cdktf.stringToTerraform(this._id),
      inline_hook_id: cdktf.stringToTerraform(this._inlineHookId),
      policy_id: cdktf.stringToTerraform(this._policyId),
      target_group_id: cdktf.stringToTerraform(this._targetGroupId),
      ui_schema_id: cdktf.stringToTerraform(this._uiSchemaId),
      unknown_user_action: cdktf.stringToTerraform(this._unknownUserAction),
      profile_attributes: cdktf.listMapper(policyRuleProfileEnrollmentProfileAttributesToTerraform, true)(this._profileAttributes.internalValue),
    };
  }
}
