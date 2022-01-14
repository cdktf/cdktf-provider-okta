// https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRuleIdpDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}
  */
  readonly idpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}
  */
  readonly idpType?: string;
  /**
  * Policy Rule Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}
  */
  readonly name: string;
  /**
  * Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#network_connection PolicyRuleIdpDiscovery#network_connection}
  */
  readonly networkConnection?: string;
  /**
  * The zones to exclude
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#network_excludes PolicyRuleIdpDiscovery#network_excludes}
  */
  readonly networkExcludes?: string[];
  /**
  * The zones to include
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#network_includes PolicyRuleIdpDiscovery#network_includes}
  */
  readonly networkIncludes?: string[];
  /**
  * Policy ID of the Rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#policy_id PolicyRuleIdpDiscovery#policy_id}
  */
  readonly policyId?: string;
  /**
  * Policy ID of the Rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#policyid PolicyRuleIdpDiscovery#policyid}
  */
  readonly policyid?: string;
  /**
  * Policy Rule Priority, this attribute can be set to a valid priority. To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#priority PolicyRuleIdpDiscovery#priority}
  */
  readonly priority?: number;
  /**
  * Policy Rule Status: ACTIVE or INACTIVE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#status PolicyRuleIdpDiscovery#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}
  */
  readonly userIdentifierAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}
  */
  readonly userIdentifierType?: string;
  /**
  * app_exclude block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#app_exclude PolicyRuleIdpDiscovery#app_exclude}
  */
  readonly appExclude?: PolicyRuleIdpDiscoveryAppExclude[];
  /**
  * app_include block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#app_include PolicyRuleIdpDiscovery#app_include}
  */
  readonly appInclude?: PolicyRuleIdpDiscoveryAppInclude[];
  /**
  * platform_include block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#platform_include PolicyRuleIdpDiscovery#platform_include}
  */
  readonly platformInclude?: PolicyRuleIdpDiscoveryPlatformInclude[];
  /**
  * user_identifier_patterns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#user_identifier_patterns PolicyRuleIdpDiscovery#user_identifier_patterns}
  */
  readonly userIdentifierPatterns?: PolicyRuleIdpDiscoveryUserIdentifierPatterns[];
}
export interface PolicyRuleIdpDiscoveryAppExclude {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}
  */
  readonly type: string;
}

export function policyRuleIdpDiscoveryAppExcludeToTerraform(struct?: PolicyRuleIdpDiscoveryAppExclude): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface PolicyRuleIdpDiscoveryAppInclude {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}
  */
  readonly type: string;
}

export function policyRuleIdpDiscoveryAppIncludeToTerraform(struct?: PolicyRuleIdpDiscoveryAppInclude): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface PolicyRuleIdpDiscoveryPlatformInclude {
  /**
  * Only available with OTHER OS type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#os_expression PolicyRuleIdpDiscovery#os_expression}
  */
  readonly osExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#os_type PolicyRuleIdpDiscovery#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}
  */
  readonly type?: string;
}

export function policyRuleIdpDiscoveryPlatformIncludeToTerraform(struct?: PolicyRuleIdpDiscoveryPlatformInclude): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_expression: cdktf.stringToTerraform(struct!.osExpression),
    os_type: cdktf.stringToTerraform(struct!.osType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface PolicyRuleIdpDiscoveryUserIdentifierPatterns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#match_type PolicyRuleIdpDiscovery#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery#value PolicyRuleIdpDiscovery#value}
  */
  readonly value?: string;
}

export function policyRuleIdpDiscoveryUserIdentifierPatternsToTerraform(struct?: PolicyRuleIdpDiscoveryUserIdentifierPatterns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery okta_policy_rule_idp_discovery}
*/
export class PolicyRuleIdpDiscovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_policy_rule_idp_discovery";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/policy_rule_idp_discovery okta_policy_rule_idp_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRuleIdpDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRuleIdpDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_rule_idp_discovery',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._idpId = config.idpId;
    this._idpType = config.idpType;
    this._name = config.name;
    this._networkConnection = config.networkConnection;
    this._networkExcludes = config.networkExcludes;
    this._networkIncludes = config.networkIncludes;
    this._policyId = config.policyId;
    this._policyid = config.policyid;
    this._priority = config.priority;
    this._status = config.status;
    this._userIdentifierAttribute = config.userIdentifierAttribute;
    this._userIdentifierType = config.userIdentifierType;
    this._appExclude = config.appExclude;
    this._appInclude = config.appInclude;
    this._platformInclude = config.platformInclude;
    this._userIdentifierPatterns = config.userIdentifierPatterns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_id - computed: false, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // idp_type - computed: false, optional: true, required: false
  private _idpType?: string; 
  public get idpType() {
    return this.getStringAttribute('idp_type');
  }
  public set idpType(value: string) {
    this._idpType = value;
  }
  public resetIdpType() {
    this._idpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpTypeInput() {
    return this._idpType;
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

  // user_identifier_attribute - computed: false, optional: true, required: false
  private _userIdentifierAttribute?: string; 
  public get userIdentifierAttribute() {
    return this.getStringAttribute('user_identifier_attribute');
  }
  public set userIdentifierAttribute(value: string) {
    this._userIdentifierAttribute = value;
  }
  public resetUserIdentifierAttribute() {
    this._userIdentifierAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierAttributeInput() {
    return this._userIdentifierAttribute;
  }

  // user_identifier_type - computed: false, optional: true, required: false
  private _userIdentifierType?: string; 
  public get userIdentifierType() {
    return this.getStringAttribute('user_identifier_type');
  }
  public set userIdentifierType(value: string) {
    this._userIdentifierType = value;
  }
  public resetUserIdentifierType() {
    this._userIdentifierType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierTypeInput() {
    return this._userIdentifierType;
  }

  // app_exclude - computed: false, optional: true, required: false
  private _appExclude?: PolicyRuleIdpDiscoveryAppExclude[]; 
  public get appExclude() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('app_exclude') as any;
  }
  public set appExclude(value: PolicyRuleIdpDiscoveryAppExclude[]) {
    this._appExclude = value;
  }
  public resetAppExclude() {
    this._appExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appExcludeInput() {
    return this._appExclude;
  }

  // app_include - computed: false, optional: true, required: false
  private _appInclude?: PolicyRuleIdpDiscoveryAppInclude[]; 
  public get appInclude() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('app_include') as any;
  }
  public set appInclude(value: PolicyRuleIdpDiscoveryAppInclude[]) {
    this._appInclude = value;
  }
  public resetAppInclude() {
    this._appInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIncludeInput() {
    return this._appInclude;
  }

  // platform_include - computed: false, optional: true, required: false
  private _platformInclude?: PolicyRuleIdpDiscoveryPlatformInclude[]; 
  public get platformInclude() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('platform_include') as any;
  }
  public set platformInclude(value: PolicyRuleIdpDiscoveryPlatformInclude[]) {
    this._platformInclude = value;
  }
  public resetPlatformInclude() {
    this._platformInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIncludeInput() {
    return this._platformInclude;
  }

  // user_identifier_patterns - computed: false, optional: true, required: false
  private _userIdentifierPatterns?: PolicyRuleIdpDiscoveryUserIdentifierPatterns[]; 
  public get userIdentifierPatterns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('user_identifier_patterns') as any;
  }
  public set userIdentifierPatterns(value: PolicyRuleIdpDiscoveryUserIdentifierPatterns[]) {
    this._userIdentifierPatterns = value;
  }
  public resetUserIdentifierPatterns() {
    this._userIdentifierPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierPatternsInput() {
    return this._userIdentifierPatterns;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      idp_id: cdktf.stringToTerraform(this._idpId),
      idp_type: cdktf.stringToTerraform(this._idpType),
      name: cdktf.stringToTerraform(this._name),
      network_connection: cdktf.stringToTerraform(this._networkConnection),
      network_excludes: cdktf.listMapper(cdktf.stringToTerraform)(this._networkExcludes),
      network_includes: cdktf.listMapper(cdktf.stringToTerraform)(this._networkIncludes),
      policy_id: cdktf.stringToTerraform(this._policyId),
      policyid: cdktf.stringToTerraform(this._policyid),
      priority: cdktf.numberToTerraform(this._priority),
      status: cdktf.stringToTerraform(this._status),
      user_identifier_attribute: cdktf.stringToTerraform(this._userIdentifierAttribute),
      user_identifier_type: cdktf.stringToTerraform(this._userIdentifierType),
      app_exclude: cdktf.listMapper(policyRuleIdpDiscoveryAppExcludeToTerraform)(this._appExclude),
      app_include: cdktf.listMapper(policyRuleIdpDiscoveryAppIncludeToTerraform)(this._appInclude),
      platform_include: cdktf.listMapper(policyRuleIdpDiscoveryPlatformIncludeToTerraform)(this._platformInclude),
      user_identifier_patterns: cdktf.listMapper(policyRuleIdpDiscoveryUserIdentifierPatternsToTerraform)(this._userIdentifierPatterns),
    };
  }
}
