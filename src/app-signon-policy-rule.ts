// https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppSignonPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow or deny access based on the rule conditions: ALLOW or DENY
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#access AppSignonPolicyRule#access}
  */
  readonly access?: string;
  /**
  * An array that contains nested Authenticator Constraint objects that are organized by the Authenticator class
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#constraints AppSignonPolicyRule#constraints}
  */
  readonly constraints?: string[];
  /**
  * This is an optional advanced setting. If the expression is formatted incorrectly or conflicts with conditions set above, the rule may not match any users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#custom_expression AppSignonPolicyRule#custom_expression}
  */
  readonly customExpression?: string;
  /**
  * If the device is managed. A device is managed if it's managed by a device management system. When managed is passed, registered must also be included and must be set to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#device_is_managed AppSignonPolicyRule#device_is_managed}
  */
  readonly deviceIsManaged?: boolean | cdktf.IResolvable;
  /**
  * If the device is registered. A device is registered if the User enrolls with Okta Verify that is installed on the device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#device_is_registered AppSignonPolicyRule#device_is_registered}
  */
  readonly deviceIsRegistered?: boolean | cdktf.IResolvable;
  /**
  * The number of factors required to satisfy this assurance level
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#factor_mode AppSignonPolicyRule#factor_mode}
  */
  readonly factorMode?: string;
  /**
  * List of group IDs to exclude
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#groups_excluded AppSignonPolicyRule#groups_excluded}
  */
  readonly groupsExcluded?: string[];
  /**
  * List of group IDs to include
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#groups_included AppSignonPolicyRule#groups_included}
  */
  readonly groupsIncluded?: string[];
  /**
  * Policy Rule Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#name AppSignonPolicyRule#name}
  */
  readonly name: string;
  /**
  * Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#network_connection AppSignonPolicyRule#network_connection}
  */
  readonly networkConnection?: string;
  /**
  * The zones to exclude
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#network_excludes AppSignonPolicyRule#network_excludes}
  */
  readonly networkExcludes?: string[];
  /**
  * The zones to include
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#network_includes AppSignonPolicyRule#network_includes}
  */
  readonly networkIncludes?: string[];
  /**
  * ID of the policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#policy_id AppSignonPolicyRule#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#priority AppSignonPolicyRule#priority}
  */
  readonly priority?: number;
  /**
  * The duration after which the end user must re-authenticate, regardless of user activity. Use the ISO 8601 Period format for recurring time intervals. PT0S - Every sign-in attempt, PT43800H - Once per session
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#re_authentication_frequency AppSignonPolicyRule#re_authentication_frequency}
  */
  readonly reAuthenticationFrequency?: string;
  /**
  * Status of the rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#status AppSignonPolicyRule#status}
  */
  readonly status?: string;
  /**
  * The Verification Method type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#type AppSignonPolicyRule#type}
  */
  readonly type?: string;
  /**
  * Set of User Type IDs to exclude
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#user_types_excluded AppSignonPolicyRule#user_types_excluded}
  */
  readonly userTypesExcluded?: string[];
  /**
  * Set of User Type IDs to include
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#user_types_included AppSignonPolicyRule#user_types_included}
  */
  readonly userTypesIncluded?: string[];
  /**
  * Set of User IDs to exclude
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#users_excluded AppSignonPolicyRule#users_excluded}
  */
  readonly usersExcluded?: string[];
  /**
  * Set of User IDs to include
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#users_included AppSignonPolicyRule#users_included}
  */
  readonly usersIncluded?: string[];
  /**
  * platform_include block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#platform_include AppSignonPolicyRule#platform_include}
  */
  readonly platformInclude?: AppSignonPolicyRulePlatformInclude[] | cdktf.IResolvable;
}
export interface AppSignonPolicyRulePlatformInclude {
  /**
  * Only available with OTHER OS type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#os_expression AppSignonPolicyRule#os_expression}
  */
  readonly osExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#os_type AppSignonPolicyRule#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule#type AppSignonPolicyRule#type}
  */
  readonly type?: string;
}

export function appSignonPolicyRulePlatformIncludeToTerraform(struct?: AppSignonPolicyRulePlatformInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_expression: cdktf.stringToTerraform(struct!.osExpression),
    os_type: cdktf.stringToTerraform(struct!.osType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule okta_app_signon_policy_rule}
*/
export class AppSignonPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_signon_policy_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/app_signon_policy_rule okta_app_signon_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppSignonPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AppSignonPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_signon_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.20.8',
        providerVersionConstraint: '~> 3.20.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._access = config.access;
    this._constraints = config.constraints;
    this._customExpression = config.customExpression;
    this._deviceIsManaged = config.deviceIsManaged;
    this._deviceIsRegistered = config.deviceIsRegistered;
    this._factorMode = config.factorMode;
    this._groupsExcluded = config.groupsExcluded;
    this._groupsIncluded = config.groupsIncluded;
    this._name = config.name;
    this._networkConnection = config.networkConnection;
    this._networkExcludes = config.networkExcludes;
    this._networkIncludes = config.networkIncludes;
    this._policyId = config.policyId;
    this._priority = config.priority;
    this._reAuthenticationFrequency = config.reAuthenticationFrequency;
    this._status = config.status;
    this._type = config.type;
    this._userTypesExcluded = config.userTypesExcluded;
    this._userTypesIncluded = config.userTypesIncluded;
    this._usersExcluded = config.usersExcluded;
    this._usersIncluded = config.usersIncluded;
    this._platformInclude = config.platformInclude;
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

  // constraints - computed: false, optional: true, required: false
  private _constraints?: string[]; 
  public get constraints() {
    return this.getListAttribute('constraints');
  }
  public set constraints(value: string[]) {
    this._constraints = value;
  }
  public resetConstraints() {
    this._constraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints;
  }

  // custom_expression - computed: false, optional: true, required: false
  private _customExpression?: string; 
  public get customExpression() {
    return this.getStringAttribute('custom_expression');
  }
  public set customExpression(value: string) {
    this._customExpression = value;
  }
  public resetCustomExpression() {
    this._customExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customExpressionInput() {
    return this._customExpression;
  }

  // device_is_managed - computed: false, optional: true, required: false
  private _deviceIsManaged?: boolean | cdktf.IResolvable; 
  public get deviceIsManaged() {
    return this.getBooleanAttribute('device_is_managed');
  }
  public set deviceIsManaged(value: boolean | cdktf.IResolvable) {
    this._deviceIsManaged = value;
  }
  public resetDeviceIsManaged() {
    this._deviceIsManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIsManagedInput() {
    return this._deviceIsManaged;
  }

  // device_is_registered - computed: false, optional: true, required: false
  private _deviceIsRegistered?: boolean | cdktf.IResolvable; 
  public get deviceIsRegistered() {
    return this.getBooleanAttribute('device_is_registered');
  }
  public set deviceIsRegistered(value: boolean | cdktf.IResolvable) {
    this._deviceIsRegistered = value;
  }
  public resetDeviceIsRegistered() {
    this._deviceIsRegistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIsRegisteredInput() {
    return this._deviceIsRegistered;
  }

  // factor_mode - computed: false, optional: true, required: false
  private _factorMode?: string; 
  public get factorMode() {
    return this.getStringAttribute('factor_mode');
  }
  public set factorMode(value: string) {
    this._factorMode = value;
  }
  public resetFactorMode() {
    this._factorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorModeInput() {
    return this._factorMode;
  }

  // groups_excluded - computed: false, optional: true, required: false
  private _groupsExcluded?: string[]; 
  public get groupsExcluded() {
    return cdktf.Fn.tolist(this.getListAttribute('groups_excluded'));
  }
  public set groupsExcluded(value: string[]) {
    this._groupsExcluded = value;
  }
  public resetGroupsExcluded() {
    this._groupsExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsExcludedInput() {
    return this._groupsExcluded;
  }

  // groups_included - computed: false, optional: true, required: false
  private _groupsIncluded?: string[]; 
  public get groupsIncluded() {
    return cdktf.Fn.tolist(this.getListAttribute('groups_included'));
  }
  public set groupsIncluded(value: string[]) {
    this._groupsIncluded = value;
  }
  public resetGroupsIncluded() {
    this._groupsIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsIncludedInput() {
    return this._groupsIncluded;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_connection - computed: false, optional: true, required: false
  private _networkConnection?: string; 
  public get networkConnection() {
    return this.getStringAttribute('network_connection');
  }
  public set networkConnection(value: string) {
    this._networkConnection = value;
  }
  public resetNetworkConnection() {
    this._networkConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectionInput() {
    return this._networkConnection;
  }

  // network_excludes - computed: false, optional: true, required: false
  private _networkExcludes?: string[]; 
  public get networkExcludes() {
    return this.getListAttribute('network_excludes');
  }
  public set networkExcludes(value: string[]) {
    this._networkExcludes = value;
  }
  public resetNetworkExcludes() {
    this._networkExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExcludesInput() {
    return this._networkExcludes;
  }

  // network_includes - computed: false, optional: true, required: false
  private _networkIncludes?: string[]; 
  public get networkIncludes() {
    return this.getListAttribute('network_includes');
  }
  public set networkIncludes(value: string[]) {
    this._networkIncludes = value;
  }
  public resetNetworkIncludes() {
    this._networkIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIncludesInput() {
    return this._networkIncludes;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // re_authentication_frequency - computed: false, optional: true, required: false
  private _reAuthenticationFrequency?: string; 
  public get reAuthenticationFrequency() {
    return this.getStringAttribute('re_authentication_frequency');
  }
  public set reAuthenticationFrequency(value: string) {
    this._reAuthenticationFrequency = value;
  }
  public resetReAuthenticationFrequency() {
    this._reAuthenticationFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reAuthenticationFrequencyInput() {
    return this._reAuthenticationFrequency;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_types_excluded - computed: false, optional: true, required: false
  private _userTypesExcluded?: string[]; 
  public get userTypesExcluded() {
    return cdktf.Fn.tolist(this.getListAttribute('user_types_excluded'));
  }
  public set userTypesExcluded(value: string[]) {
    this._userTypesExcluded = value;
  }
  public resetUserTypesExcluded() {
    this._userTypesExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypesExcludedInput() {
    return this._userTypesExcluded;
  }

  // user_types_included - computed: false, optional: true, required: false
  private _userTypesIncluded?: string[]; 
  public get userTypesIncluded() {
    return cdktf.Fn.tolist(this.getListAttribute('user_types_included'));
  }
  public set userTypesIncluded(value: string[]) {
    this._userTypesIncluded = value;
  }
  public resetUserTypesIncluded() {
    this._userTypesIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypesIncludedInput() {
    return this._userTypesIncluded;
  }

  // users_excluded - computed: false, optional: true, required: false
  private _usersExcluded?: string[]; 
  public get usersExcluded() {
    return cdktf.Fn.tolist(this.getListAttribute('users_excluded'));
  }
  public set usersExcluded(value: string[]) {
    this._usersExcluded = value;
  }
  public resetUsersExcluded() {
    this._usersExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersExcludedInput() {
    return this._usersExcluded;
  }

  // users_included - computed: false, optional: true, required: false
  private _usersIncluded?: string[]; 
  public get usersIncluded() {
    return cdktf.Fn.tolist(this.getListAttribute('users_included'));
  }
  public set usersIncluded(value: string[]) {
    this._usersIncluded = value;
  }
  public resetUsersIncluded() {
    this._usersIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersIncludedInput() {
    return this._usersIncluded;
  }

  // platform_include - computed: false, optional: true, required: false
  private _platformInclude?: AppSignonPolicyRulePlatformInclude[] | cdktf.IResolvable; 
  public get platformInclude() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('platform_include')));
  }
  public set platformInclude(value: AppSignonPolicyRulePlatformInclude[] | cdktf.IResolvable) {
    this._platformInclude = value;
  }
  public resetPlatformInclude() {
    this._platformInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIncludeInput() {
    return this._platformInclude;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      constraints: cdktf.listMapper(cdktf.stringToTerraform)(this._constraints),
      custom_expression: cdktf.stringToTerraform(this._customExpression),
      device_is_managed: cdktf.booleanToTerraform(this._deviceIsManaged),
      device_is_registered: cdktf.booleanToTerraform(this._deviceIsRegistered),
      factor_mode: cdktf.stringToTerraform(this._factorMode),
      groups_excluded: cdktf.listMapper(cdktf.stringToTerraform)(this._groupsExcluded),
      groups_included: cdktf.listMapper(cdktf.stringToTerraform)(this._groupsIncluded),
      name: cdktf.stringToTerraform(this._name),
      network_connection: cdktf.stringToTerraform(this._networkConnection),
      network_excludes: cdktf.listMapper(cdktf.stringToTerraform)(this._networkExcludes),
      network_includes: cdktf.listMapper(cdktf.stringToTerraform)(this._networkIncludes),
      policy_id: cdktf.stringToTerraform(this._policyId),
      priority: cdktf.numberToTerraform(this._priority),
      re_authentication_frequency: cdktf.stringToTerraform(this._reAuthenticationFrequency),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      user_types_excluded: cdktf.listMapper(cdktf.stringToTerraform)(this._userTypesExcluded),
      user_types_included: cdktf.listMapper(cdktf.stringToTerraform)(this._userTypesIncluded),
      users_excluded: cdktf.listMapper(cdktf.stringToTerraform)(this._usersExcluded),
      users_included: cdktf.listMapper(cdktf.stringToTerraform)(this._usersIncluded),
      platform_include: cdktf.listMapper(appSignonPolicyRulePlatformIncludeToTerraform)(this._platformInclude),
    };
  }
}
