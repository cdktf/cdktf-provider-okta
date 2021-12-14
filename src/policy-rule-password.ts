// https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRulePasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy Rule Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#name PolicyRulePassword#name}
  */
  readonly name: string;
  /**
  * Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#network_connection PolicyRulePassword#network_connection}
  */
  readonly networkConnection?: string;
  /**
  * The zones to exclude
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#network_excludes PolicyRulePassword#network_excludes}
  */
  readonly networkExcludes?: string[];
  /**
  * The zones to include
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#network_includes PolicyRulePassword#network_includes}
  */
  readonly networkIncludes?: string[];
  /**
  * Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#password_change PolicyRulePassword#password_change}
  */
  readonly passwordChange?: string;
  /**
  * Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#password_reset PolicyRulePassword#password_reset}
  */
  readonly passwordReset?: string;
  /**
  * Allow or deny a user to unlock. Default = DENY
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#password_unlock PolicyRulePassword#password_unlock}
  */
  readonly passwordUnlock?: string;
  /**
  * Policy ID of the Rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#policy_id PolicyRulePassword#policy_id}
  */
  readonly policyId?: string;
  /**
  * Policy ID of the Rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#policyid PolicyRulePassword#policyid}
  */
  readonly policyid?: string;
  /**
  * Policy Rule Priority, this attribute can be set to a valid priority. To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#priority PolicyRulePassword#priority}
  */
  readonly priority?: number;
  /**
  * Policy Rule Status: ACTIVE or INACTIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#status PolicyRulePassword#status}
  */
  readonly status?: string;
  /**
  * Set of User IDs to Exclude
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html#users_excluded PolicyRulePassword#users_excluded}
  */
  readonly usersExcluded?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html okta_policy_rule_password}
*/
export class PolicyRulePassword extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_policy_rule_password";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_password.html okta_policy_rule_password} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRulePasswordConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRulePasswordConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_rule_password',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._networkConnection = config.networkConnection;
    this._networkExcludes = config.networkExcludes;
    this._networkIncludes = config.networkIncludes;
    this._passwordChange = config.passwordChange;
    this._passwordReset = config.passwordReset;
    this._passwordUnlock = config.passwordUnlock;
    this._policyId = config.policyId;
    this._policyid = config.policyid;
    this._priority = config.priority;
    this._status = config.status;
    this._usersExcluded = config.usersExcluded;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // password_change - computed: false, optional: true, required: false
  private _passwordChange?: string; 
  public get passwordChange() {
    return this.getStringAttribute('password_change');
  }
  public set passwordChange(value: string) {
    this._passwordChange = value;
  }
  public resetPasswordChange() {
    this._passwordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeInput() {
    return this._passwordChange;
  }

  // password_reset - computed: false, optional: true, required: false
  private _passwordReset?: string; 
  public get passwordReset() {
    return this.getStringAttribute('password_reset');
  }
  public set passwordReset(value: string) {
    this._passwordReset = value;
  }
  public resetPasswordReset() {
    this._passwordReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetInput() {
    return this._passwordReset;
  }

  // password_unlock - computed: false, optional: true, required: false
  private _passwordUnlock?: string; 
  public get passwordUnlock() {
    return this.getStringAttribute('password_unlock');
  }
  public set passwordUnlock(value: string) {
    this._passwordUnlock = value;
  }
  public resetPasswordUnlock() {
    this._passwordUnlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordUnlockInput() {
    return this._passwordUnlock;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policyid - computed: false, optional: true, required: false
  private _policyid?: string; 
  public get policyid() {
    return this.getStringAttribute('policyid');
  }
  public set policyid(value: string) {
    this._policyid = value;
  }
  public resetPolicyid() {
    this._policyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidInput() {
    return this._policyid;
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

  // users_excluded - computed: false, optional: true, required: false
  private _usersExcluded?: string[]; 
  public get usersExcluded() {
    return this.getListAttribute('users_excluded');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      network_connection: cdktf.stringToTerraform(this._networkConnection),
      network_excludes: cdktf.listMapper(cdktf.stringToTerraform)(this._networkExcludes),
      network_includes: cdktf.listMapper(cdktf.stringToTerraform)(this._networkIncludes),
      password_change: cdktf.stringToTerraform(this._passwordChange),
      password_reset: cdktf.stringToTerraform(this._passwordReset),
      password_unlock: cdktf.stringToTerraform(this._passwordUnlock),
      policy_id: cdktf.stringToTerraform(this._policyId),
      policyid: cdktf.stringToTerraform(this._policyid),
      priority: cdktf.numberToTerraform(this._priority),
      status: cdktf.stringToTerraform(this._status),
      users_excluded: cdktf.listMapper(cdktf.stringToTerraform)(this._usersExcluded),
    };
  }
}
