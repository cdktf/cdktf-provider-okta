# `okta_admin_role_targets`

Refer to the Terraform Registory for docs: [`okta_admin_role_targets`](https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/admin_role_targets).

# `adminRoleTargets` Submodule <a name="`adminRoleTargets` Submodule" id="@cdktf/provider-okta.adminRoleTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdminRoleTargets <a name="AdminRoleTargets" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/admin_role_targets okta_admin_role_targets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AdminRoleTargets(Construct Scope, string Id, AdminRoleTargetsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig">AdminRoleTargetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig">AdminRoleTargetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetApps">ResetApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetApps` <a name="ResetApps" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetApps"></a>

```csharp
private void ResetApps()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AdminRoleTargets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AdminRoleTargets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AdminRoleTargets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AdminRoleTargets.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AdminRoleTargets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AdminRoleTargets resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AdminRoleTargets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AdminRoleTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/admin_role_targets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AdminRoleTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.appsInput">AppsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleTypeInput">RoleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.apps">Apps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleType">RoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `AppsInput`<sup>Optional</sup> <a name="AppsInput" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.appsInput"></a>

```csharp
public string[] AppsInput { get; }
```

- *Type:* string[]

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RoleTypeInput`<sup>Optional</sup> <a name="RoleTypeInput" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleTypeInput"></a>

```csharp
public string RoleTypeInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.apps"></a>

```csharp
public string[] Apps { get; }
```

- *Type:* string[]

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.roleType"></a>

```csharp
public string RoleType { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdminRoleTargetsConfig <a name="AdminRoleTargetsConfig" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AdminRoleTargetsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RoleType,
    string UserId,
    string[] Apps = null,
    string[] Groups = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.roleType">RoleType</a></code> | <code>string</code> | Type of the role that is assigned to the user and supports optional targets. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.userId">UserId</a></code> | <code>string</code> | User associated with the role. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.apps">Apps</a></code> | <code>string[]</code> | List of app names (name represents set of app instances) or a combination of app name and app instance ID (like 'salesforce' or 'facebook.0oapsqQ6dv19pqyEo0g3'). |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.groups">Groups</a></code> | <code>string[]</code> | List of group IDs. |
| <code><a href="#@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/admin_role_targets#id AdminRoleTargets#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.roleType"></a>

```csharp
public string RoleType { get; set; }
```

- *Type:* string

Type of the role that is assigned to the user and supports optional targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/admin_role_targets#role_type AdminRoleTargets#role_type}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

User associated with the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/admin_role_targets#user_id AdminRoleTargets#user_id}

---

##### `Apps`<sup>Optional</sup> <a name="Apps" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.apps"></a>

```csharp
public string[] Apps { get; set; }
```

- *Type:* string[]

List of app names (name represents set of app instances) or a combination of app name and app instance ID (like 'salesforce' or 'facebook.0oapsqQ6dv19pqyEo0g3').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/admin_role_targets#apps AdminRoleTargets#apps}

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

List of group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/admin_role_targets#groups AdminRoleTargets#groups}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.adminRoleTargets.AdminRoleTargetsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.0/docs/resources/admin_role_targets#id AdminRoleTargets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



