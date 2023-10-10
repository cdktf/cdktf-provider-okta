# `okta_group_rule`

Refer to the Terraform Registory for docs: [`okta_group_rule`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule).

# `groupRule` Submodule <a name="`groupRule` Submodule" id="@cdktf/provider-okta.groupRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupRule <a name="GroupRule" id="@cdktf/provider-okta.groupRule.GroupRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule okta_group_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupRule(Construct Scope, string Id, GroupRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig">GroupRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig">GroupRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetExpressionType">ResetExpressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetRemoveAssignedUsers">ResetRemoveAssignedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetUsersExcluded">ResetUsersExcluded</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.groupRule.GroupRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.groupRule.GroupRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.groupRule.GroupRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.groupRule.GroupRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.groupRule.GroupRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.groupRule.GroupRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.groupRule.GroupRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.groupRule.GroupRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.groupRule.GroupRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.groupRule.GroupRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetExpressionType` <a name="ResetExpressionType" id="@cdktf/provider-okta.groupRule.GroupRule.resetExpressionType"></a>

```csharp
private void ResetExpressionType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.groupRule.GroupRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRemoveAssignedUsers` <a name="ResetRemoveAssignedUsers" id="@cdktf/provider-okta.groupRule.GroupRule.resetRemoveAssignedUsers"></a>

```csharp
private void ResetRemoveAssignedUsers()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.groupRule.GroupRule.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUsersExcluded` <a name="ResetUsersExcluded" id="@cdktf/provider-okta.groupRule.GroupRule.resetUsersExcluded"></a>

```csharp
private void ResetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.groupRule.GroupRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

GroupRule.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.groupRule.GroupRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.groupRule.GroupRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

GroupRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.groupRule.GroupRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.groupRule.GroupRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

GroupRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.groupRule.GroupRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.expressionTypeInput">ExpressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.expressionValueInput">ExpressionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.groupAssignmentsInput">GroupAssignmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.removeAssignedUsersInput">RemoveAssignedUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.usersExcludedInput">UsersExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.expressionType">ExpressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.expressionValue">ExpressionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.groupAssignments">GroupAssignments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.removeAssignedUsers">RemoveAssignedUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.usersExcluded">UsersExcluded</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.groupRule.GroupRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.groupRule.GroupRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.groupRule.GroupRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.groupRule.GroupRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.groupRule.GroupRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.groupRule.GroupRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.groupRule.GroupRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.groupRule.GroupRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.groupRule.GroupRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.groupRule.GroupRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.groupRule.GroupRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.groupRule.GroupRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupRule.GroupRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.groupRule.GroupRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExpressionTypeInput`<sup>Optional</sup> <a name="ExpressionTypeInput" id="@cdktf/provider-okta.groupRule.GroupRule.property.expressionTypeInput"></a>

```csharp
public string ExpressionTypeInput { get; }
```

- *Type:* string

---

##### `ExpressionValueInput`<sup>Optional</sup> <a name="ExpressionValueInput" id="@cdktf/provider-okta.groupRule.GroupRule.property.expressionValueInput"></a>

```csharp
public string ExpressionValueInput { get; }
```

- *Type:* string

---

##### `GroupAssignmentsInput`<sup>Optional</sup> <a name="GroupAssignmentsInput" id="@cdktf/provider-okta.groupRule.GroupRule.property.groupAssignmentsInput"></a>

```csharp
public string[] GroupAssignmentsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.groupRule.GroupRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.groupRule.GroupRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RemoveAssignedUsersInput`<sup>Optional</sup> <a name="RemoveAssignedUsersInput" id="@cdktf/provider-okta.groupRule.GroupRule.property.removeAssignedUsersInput"></a>

```csharp
public object RemoveAssignedUsersInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.groupRule.GroupRule.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UsersExcludedInput`<sup>Optional</sup> <a name="UsersExcludedInput" id="@cdktf/provider-okta.groupRule.GroupRule.property.usersExcludedInput"></a>

```csharp
public string[] UsersExcludedInput { get; }
```

- *Type:* string[]

---

##### `ExpressionType`<sup>Required</sup> <a name="ExpressionType" id="@cdktf/provider-okta.groupRule.GroupRule.property.expressionType"></a>

```csharp
public string ExpressionType { get; }
```

- *Type:* string

---

##### `ExpressionValue`<sup>Required</sup> <a name="ExpressionValue" id="@cdktf/provider-okta.groupRule.GroupRule.property.expressionValue"></a>

```csharp
public string ExpressionValue { get; }
```

- *Type:* string

---

##### `GroupAssignments`<sup>Required</sup> <a name="GroupAssignments" id="@cdktf/provider-okta.groupRule.GroupRule.property.groupAssignments"></a>

```csharp
public string[] GroupAssignments { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.groupRule.GroupRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.groupRule.GroupRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RemoveAssignedUsers`<sup>Required</sup> <a name="RemoveAssignedUsers" id="@cdktf/provider-okta.groupRule.GroupRule.property.removeAssignedUsers"></a>

```csharp
public object RemoveAssignedUsers { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.groupRule.GroupRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UsersExcluded`<sup>Required</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.groupRule.GroupRule.property.usersExcluded"></a>

```csharp
public string[] UsersExcluded { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.groupRule.GroupRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupRuleConfig <a name="GroupRuleConfig" id="@cdktf/provider-okta.groupRule.GroupRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new GroupRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExpressionValue,
    string[] GroupAssignments,
    string Name,
    string ExpressionType = null,
    string Id = null,
    object RemoveAssignedUsers = null,
    string Status = null,
    string[] UsersExcluded = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.expressionValue">ExpressionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#expression_value GroupRule#expression_value}. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.groupAssignments">GroupAssignments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#group_assignments GroupRule#group_assignments}. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#name GroupRule#name}. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.expressionType">ExpressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#expression_type GroupRule#expression_type}. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#id GroupRule#id}. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.removeAssignedUsers">RemoveAssignedUsers</a></code> | <code>object</code> | Remove users added by this rule from the assigned group after deleting this resource. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#status GroupRule#status}. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.usersExcluded">UsersExcluded</a></code> | <code>string[]</code> | The list of user IDs that would be excluded when rules are processed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExpressionValue`<sup>Required</sup> <a name="ExpressionValue" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.expressionValue"></a>

```csharp
public string ExpressionValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#expression_value GroupRule#expression_value}.

---

##### `GroupAssignments`<sup>Required</sup> <a name="GroupAssignments" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.groupAssignments"></a>

```csharp
public string[] GroupAssignments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#group_assignments GroupRule#group_assignments}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#name GroupRule#name}.

---

##### `ExpressionType`<sup>Optional</sup> <a name="ExpressionType" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.expressionType"></a>

```csharp
public string ExpressionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#expression_type GroupRule#expression_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#id GroupRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RemoveAssignedUsers`<sup>Optional</sup> <a name="RemoveAssignedUsers" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.removeAssignedUsers"></a>

```csharp
public object RemoveAssignedUsers { get; set; }
```

- *Type:* object

Remove users added by this rule from the assigned group after deleting this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#remove_assigned_users GroupRule#remove_assigned_users}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#status GroupRule#status}.

---

##### `UsersExcluded`<sup>Optional</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.usersExcluded"></a>

```csharp
public string[] UsersExcluded { get; set; }
```

- *Type:* string[]

The list of user IDs that would be excluded when rules are processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/group_rule#users_excluded GroupRule#users_excluded}

---



