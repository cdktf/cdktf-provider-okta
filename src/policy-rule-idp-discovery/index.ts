/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRuleIdpDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}
  */
  readonly idpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}
  */
  readonly idpType?: string;
  /**
  * Policy Rule Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}
  */
  readonly name: string;
  /**
  * Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#network_connection PolicyRuleIdpDiscovery#network_connection}
  */
  readonly networkConnection?: string;
  /**
  * The zones to exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#network_excludes PolicyRuleIdpDiscovery#network_excludes}
  */
  readonly networkExcludes?: string[];
  /**
  * The zones to include
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#network_includes PolicyRuleIdpDiscovery#network_includes}
  */
  readonly networkIncludes?: string[];
  /**
  * Policy ID of the Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#policy_id PolicyRuleIdpDiscovery#policy_id}
  */
  readonly policyId?: string;
  /**
  * Policy Rule Priority, this attribute can be set to a valid priority. To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#priority PolicyRuleIdpDiscovery#priority}
  */
  readonly priority?: number;
  /**
  * Policy Rule Status: ACTIVE or INACTIVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#status PolicyRuleIdpDiscovery#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}
  */
  readonly userIdentifierAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}
  */
  readonly userIdentifierType?: string;
  /**
  * app_exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#app_exclude PolicyRuleIdpDiscovery#app_exclude}
  */
  readonly appExclude?: PolicyRuleIdpDiscoveryAppExclude[] | cdktf.IResolvable;
  /**
  * app_include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#app_include PolicyRuleIdpDiscovery#app_include}
  */
  readonly appInclude?: PolicyRuleIdpDiscoveryAppInclude[] | cdktf.IResolvable;
  /**
  * platform_include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#platform_include PolicyRuleIdpDiscovery#platform_include}
  */
  readonly platformInclude?: PolicyRuleIdpDiscoveryPlatformInclude[] | cdktf.IResolvable;
  /**
  * user_identifier_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#user_identifier_patterns PolicyRuleIdpDiscovery#user_identifier_patterns}
  */
  readonly userIdentifierPatterns?: PolicyRuleIdpDiscoveryUserIdentifierPatterns[] | cdktf.IResolvable;
}
export interface PolicyRuleIdpDiscoveryAppExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}
  */
  readonly type: string;
}

export function policyRuleIdpDiscoveryAppExcludeToTerraform(struct?: PolicyRuleIdpDiscoveryAppExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class PolicyRuleIdpDiscoveryAppExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleIdpDiscoveryAppExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleIdpDiscoveryAppExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PolicyRuleIdpDiscoveryAppExcludeList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleIdpDiscoveryAppExclude[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleIdpDiscoveryAppExcludeOutputReference {
    return new PolicyRuleIdpDiscoveryAppExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRuleIdpDiscoveryAppInclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}
  */
  readonly type: string;
}

export function policyRuleIdpDiscoveryAppIncludeToTerraform(struct?: PolicyRuleIdpDiscoveryAppInclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class PolicyRuleIdpDiscoveryAppIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleIdpDiscoveryAppInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleIdpDiscoveryAppInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PolicyRuleIdpDiscoveryAppIncludeList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleIdpDiscoveryAppInclude[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleIdpDiscoveryAppIncludeOutputReference {
    return new PolicyRuleIdpDiscoveryAppIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRuleIdpDiscoveryPlatformInclude {
  /**
  * Only available with OTHER OS type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#os_expression PolicyRuleIdpDiscovery#os_expression}
  */
  readonly osExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#os_type PolicyRuleIdpDiscovery#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}
  */
  readonly type?: string;
}

export function policyRuleIdpDiscoveryPlatformIncludeToTerraform(struct?: PolicyRuleIdpDiscoveryPlatformInclude | cdktf.IResolvable): any {
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

export class PolicyRuleIdpDiscoveryPlatformIncludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleIdpDiscoveryPlatformInclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.osExpression = this._osExpression;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleIdpDiscoveryPlatformInclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._osExpression = undefined;
      this._osType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._osExpression = value.osExpression;
      this._osType = value.osType;
      this._type = value.type;
    }
  }

  // os_expression - computed: false, optional: true, required: false
  private _osExpression?: string; 
  public get osExpression() {
    return this.getStringAttribute('os_expression');
  }
  public set osExpression(value: string) {
    this._osExpression = value;
  }
  public resetOsExpression() {
    this._osExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osExpressionInput() {
    return this._osExpression;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
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
}

export class PolicyRuleIdpDiscoveryPlatformIncludeList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleIdpDiscoveryPlatformInclude[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleIdpDiscoveryPlatformIncludeOutputReference {
    return new PolicyRuleIdpDiscoveryPlatformIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRuleIdpDiscoveryUserIdentifierPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#match_type PolicyRuleIdpDiscovery#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery#value PolicyRuleIdpDiscovery#value}
  */
  readonly value?: string;
}

export function policyRuleIdpDiscoveryUserIdentifierPatternsToTerraform(struct?: PolicyRuleIdpDiscoveryUserIdentifierPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleIdpDiscoveryUserIdentifierPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleIdpDiscoveryUserIdentifierPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PolicyRuleIdpDiscoveryUserIdentifierPatternsList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleIdpDiscoveryUserIdentifierPatterns[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference {
    return new PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery okta_policy_rule_idp_discovery}
*/
export class PolicyRuleIdpDiscovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_rule_idp_discovery";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/policy_rule_idp_discovery okta_policy_rule_idp_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRuleIdpDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRuleIdpDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_rule_idp_discovery',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.4.3',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._idpId = config.idpId;
    this._idpType = config.idpType;
    this._name = config.name;
    this._networkConnection = config.networkConnection;
    this._networkExcludes = config.networkExcludes;
    this._networkIncludes = config.networkIncludes;
    this._policyId = config.policyId;
    this._priority = config.priority;
    this._status = config.status;
    this._userIdentifierAttribute = config.userIdentifierAttribute;
    this._userIdentifierType = config.userIdentifierType;
    this._appExclude.internalValue = config.appExclude;
    this._appInclude.internalValue = config.appInclude;
    this._platformInclude.internalValue = config.platformInclude;
    this._userIdentifierPatterns.internalValue = config.userIdentifierPatterns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _appExclude = new PolicyRuleIdpDiscoveryAppExcludeList(this, "app_exclude", true);
  public get appExclude() {
    return this._appExclude;
  }
  public putAppExclude(value: PolicyRuleIdpDiscoveryAppExclude[] | cdktf.IResolvable) {
    this._appExclude.internalValue = value;
  }
  public resetAppExclude() {
    this._appExclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appExcludeInput() {
    return this._appExclude.internalValue;
  }

  // app_include - computed: false, optional: true, required: false
  private _appInclude = new PolicyRuleIdpDiscoveryAppIncludeList(this, "app_include", true);
  public get appInclude() {
    return this._appInclude;
  }
  public putAppInclude(value: PolicyRuleIdpDiscoveryAppInclude[] | cdktf.IResolvable) {
    this._appInclude.internalValue = value;
  }
  public resetAppInclude() {
    this._appInclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIncludeInput() {
    return this._appInclude.internalValue;
  }

  // platform_include - computed: false, optional: true, required: false
  private _platformInclude = new PolicyRuleIdpDiscoveryPlatformIncludeList(this, "platform_include", true);
  public get platformInclude() {
    return this._platformInclude;
  }
  public putPlatformInclude(value: PolicyRuleIdpDiscoveryPlatformInclude[] | cdktf.IResolvable) {
    this._platformInclude.internalValue = value;
  }
  public resetPlatformInclude() {
    this._platformInclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIncludeInput() {
    return this._platformInclude.internalValue;
  }

  // user_identifier_patterns - computed: false, optional: true, required: false
  private _userIdentifierPatterns = new PolicyRuleIdpDiscoveryUserIdentifierPatternsList(this, "user_identifier_patterns", true);
  public get userIdentifierPatterns() {
    return this._userIdentifierPatterns;
  }
  public putUserIdentifierPatterns(value: PolicyRuleIdpDiscoveryUserIdentifierPatterns[] | cdktf.IResolvable) {
    this._userIdentifierPatterns.internalValue = value;
  }
  public resetUserIdentifierPatterns() {
    this._userIdentifierPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierPatternsInput() {
    return this._userIdentifierPatterns.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      idp_id: cdktf.stringToTerraform(this._idpId),
      idp_type: cdktf.stringToTerraform(this._idpType),
      name: cdktf.stringToTerraform(this._name),
      network_connection: cdktf.stringToTerraform(this._networkConnection),
      network_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkExcludes),
      network_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkIncludes),
      policy_id: cdktf.stringToTerraform(this._policyId),
      priority: cdktf.numberToTerraform(this._priority),
      status: cdktf.stringToTerraform(this._status),
      user_identifier_attribute: cdktf.stringToTerraform(this._userIdentifierAttribute),
      user_identifier_type: cdktf.stringToTerraform(this._userIdentifierType),
      app_exclude: cdktf.listMapper(policyRuleIdpDiscoveryAppExcludeToTerraform, true)(this._appExclude.internalValue),
      app_include: cdktf.listMapper(policyRuleIdpDiscoveryAppIncludeToTerraform, true)(this._appInclude.internalValue),
      platform_include: cdktf.listMapper(policyRuleIdpDiscoveryPlatformIncludeToTerraform, true)(this._platformInclude.internalValue),
      user_identifier_patterns: cdktf.listMapper(policyRuleIdpDiscoveryUserIdentifierPatternsToTerraform, true)(this._userIdentifierPatterns.internalValue),
    };
  }
}
